import fs from 'fs';
import path from 'path';

export interface Dispatch {
  slug: string;
  title: string;
  headline: string;
  subhead: string;
  date: string;
  displayDate: string;
  category: string;
  readTime: string;
  status: string;
  featured: boolean;
  excerpt: string;
  tags: string[];
  author: string;
  content: string;
}

const DISPATCHES_DIR = path.join(process.cwd(), 'content', 'dispatches');

/**
 * Robust zero-dependency parser for YAML frontmatter and Markdown body.
 */
function parseMarkdownFile(fileContent: string): { frontmatter: Record<string, any>; content: string } {
  const match = fileContent.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (!match) {
    return { frontmatter: {}, content: fileContent.trim() };
  }

  const rawYaml = match[1];
  const content = match[2].trim();
  const frontmatter: Record<string, any> = {};

  const lines = rawYaml.split(/\r?\n/);
  for (const line of lines) {
    const colonIdx = line.indexOf(':');
    if (colonIdx === -1) continue;

    const key = line.slice(0, colonIdx).trim();
    let val: any = line.slice(colonIdx + 1).trim();

    // Strip wrapping quotes
    if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
      val = val.slice(1, -1);
    } else if (val.startsWith('[') && val.endsWith(']')) {
      // Parse array e.g. ["Tag1", "Tag2"]
      val = val
        .slice(1, -1)
        .split(',')
        .map((s: string) => s.trim().replace(/^['"]|['"]$/g, ''))
        .filter(Boolean);
    } else if (val === 'true') {
      val = true;
    } else if (val === 'false') {
      val = false;
    }

    frontmatter[key] = val;
  }

  return { frontmatter, content };
}

/**
 * Returns all local Markdown dispatches sorted by featured status and date.
 */
export function getAllDispatches(): Dispatch[] {
  try {
    if (!fs.existsSync(DISPATCHES_DIR)) {
      return [];
    }

    const fileNames = fs.readdirSync(DISPATCHES_DIR).filter((f) => f.endsWith('.md') || f.endsWith('.mdx'));

    const dispatches: Dispatch[] = fileNames.map((fileName) => {
      const fullPath = path.join(DISPATCHES_DIR, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { frontmatter, content } = parseMarkdownFile(fileContents);

      const defaultSlug = fileName.replace(/\.mdx?$/, '');

      return {
        slug: frontmatter.slug || defaultSlug,
        title: frontmatter.title || 'Untitled Dispatch',
        headline: frontmatter.headline || frontmatter.title || 'UNTITLED DISPATCH',
        subhead: frontmatter.subhead || '',
        date: frontmatter.date || '1919-01-01',
        displayDate: frontmatter.displayDate || 'NOV 1919 RECORD',
        category: frontmatter.category || 'Engineering Dispatch',
        readTime: frontmatter.readTime || '5 MIN READ',
        status: frontmatter.status || 'PUBLISHED DISPATCH',
        featured: Boolean(frontmatter.featured),
        excerpt: frontmatter.excerpt || content.slice(0, 160) + '...',
        tags: Array.isArray(frontmatter.tags) ? frontmatter.tags : [],
        author: frontmatter.author || 'Ayush Patidar',
        content,
      };
    });

    // Sort: Featured first, then chronological descending
    return dispatches.sort((a, b) => {
      if (a.featured && !b.featured) return -1;
      if (!a.featured && b.featured) return 1;
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });
  } catch (err) {
    console.error('Error reading dispatches from content/dispatches:', err);
    return [];
  }
}

/**
 * Fetch a single dispatch by its slug.
 */
export function getDispatchBySlug(slug: string): Dispatch | null {
  const dispatches = getAllDispatches();
  return dispatches.find((d) => d.slug === slug) || null;
}

/**
 * Returns the lead featured dispatch for the Newspaper masthead.
 */
export function getFeaturedDispatch(): Dispatch | null {
  const dispatches = getAllDispatches();
  return dispatches.find((d) => d.featured) || dispatches[0] || null;
}

