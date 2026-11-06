import React from 'react';

interface MarkdownContentProps {
  content: string;
  className?: string;
}

/**
 * Clean, lightweight renderer for Markdown articles in the 1919 broadsheet format.
 * Renders headers, lists, blockquotes, code blocks, bold, and paragraphs with vintage typography.
 */
export function MarkdownContent({ content, className = '' }: MarkdownContentProps) {
  const blocks = content.split(/\n\n+/);

  return (
    <div className={`space-y-4 text-xs sm:text-sm leading-relaxed text-charcoal/90 ${className}`}>
      {blocks.map((block, idx) => {
        const trimmed = block.trim();

        // Level 3 Header: ### Title
        if (trimmed.startsWith('### ')) {
          return (
            <h3
              key={idx}
              className="mt-6 mb-2 font-serif text-lg sm:text-xl font-bold uppercase tracking-wide text-charcoal border-b border-charcoal/20 pb-1"
            >
              {trimmed.replace(/^### /, '')}
            </h3>
          );
        }

        // Level 2 Header: ## Title
        if (trimmed.startsWith('## ')) {
          return (
            <h2
              key={idx}
              className="mt-8 mb-3 font-serif text-xl sm:text-2xl font-black uppercase tracking-tight text-charcoal border-b-2 border-charcoal/30 pb-1.5"
            >
              {trimmed.replace(/^## /, '')}
            </h2>
          );
        }

        // Fenced Code Block: ```python ... ```
        if (trimmed.startsWith('```')) {
          const lines = trimmed.split('\n');
          const lang = lines[0].replace(/^```/, '').trim();
          const code = lines.slice(1, -1).join('\n');

          return (
            <div key={idx} className="my-4 overflow-hidden border border-charcoal bg-[#1A1F1C] text-ivory shadow-md">
              {lang && (
                <div className="flex items-center justify-between border-b border-brass/30 bg-charcoal px-3 py-1 font-mono text-[9px] uppercase tracking-wider text-brass">
                  <span>SPECIFICATION // {lang}</span>
                  <span className="text-sage">AUTOCONTRACT</span>
                </div>
              )}
              <pre className="overflow-x-auto p-3 font-mono text-[11px] leading-relaxed text-[#E7E4D6]">
                <code>{code}</code>
              </pre>
            </div>
          );
        }

        // Unordered List: - item or * item
        if (trimmed.startsWith('- ') || trimmed.startsWith('* ')) {
          const items = trimmed.split(/\n/).map((line) => line.replace(/^[-*]\s+/, '').trim());
          return (
            <ul key={idx} className="my-3 space-y-1.5 pl-4 list-disc marker:text-oxblood">
              {items.map((item, itemIdx) => (
                <li key={itemIdx} className="pl-1">
                  {renderInlineMarkdown(item)}
                </li>
              ))}
            </ul>
          );
        }

        // Ordered List: 1. item
        if (/^\d+\.\s+/.test(trimmed)) {
          const items = trimmed.split(/\n/).map((line) => line.replace(/^\d+\.\s+/, '').trim());
          return (
            <ol key={idx} className="my-3 space-y-2 pl-4 list-decimal marker:font-mono marker:font-bold marker:text-oxblood">
              {items.map((item, itemIdx) => (
                <li key={itemIdx} className="pl-1">
                  {renderInlineMarkdown(item)}
                </li>
              ))}
            </ol>
          );
        }

        // Blockquote: > quote
        if (trimmed.startsWith('> ')) {
          return (
            <blockquote
              key={idx}
              className="my-4 border-l-4 border-oxblood bg-charcoal/5 py-2 pl-4 pr-3 font-serif italic text-sm text-charcoal/85"
            >
              {renderInlineMarkdown(trimmed.replace(/^>\s*/, ''))}
            </blockquote>
          );
        }

        // Standard Paragraph (Drop cap applied to the very first paragraph)
        return (
          <p key={idx} className={idx === 0 ? 'dropcap text-justify' : 'text-justify'}>
            {renderInlineMarkdown(trimmed)}
          </p>
        );
      })}
    </div>
  );
}

/**
 * Helper to parse bold (**text**), code (`code`), and italics (*text*) inline.
 */
function renderInlineMarkdown(text: string): React.ReactNode {
  // Simple token parser for inline markdown
  const parts: React.ReactNode[] = [];
  let remaining = text;
  let key = 0;

  while (remaining.length > 0) {
    // Bold: **text**
    const boldMatch = remaining.match(/\*\*(.*?)\*\*/);
    // Inline code: `code`
    const codeMatch = remaining.match(/`([^`]+)`/);
    // Italics: *text*
    const italicMatch = remaining.match(/(?<!\*)\*(?!\*)(.*?)(?<!\*)\*(?!\*)/);

    // Find earliest match
    const matches = [
      boldMatch ? { type: 'bold', index: boldMatch.index!, length: boldMatch[0].length, content: boldMatch[1] } : null,
      codeMatch ? { type: 'code', index: codeMatch.index!, length: codeMatch[0].length, content: codeMatch[1] } : null,
      italicMatch ? { type: 'italic', index: italicMatch.index!, length: italicMatch[0].length, content: italicMatch[1] } : null,
    ].filter(Boolean) as { type: string; index: number; length: number; content: string }[];

    if (matches.length === 0) {
      parts.push(remaining);
      break;
    }

    matches.sort((a, b) => a.index - b.index);
    const earliest = matches[0];

    // Push preceding text
    if (earliest.index > 0) {
      parts.push(remaining.slice(0, earliest.index));
    }

    // Push matched element
    if (earliest.type === 'bold') {
      parts.push(
        <strong key={key++} className="font-bold text-charcoal">
          {earliest.content}
        </strong>
      );
    } else if (earliest.type === 'code') {
      parts.push(
        <code key={key++} className="border border-charcoal/30 bg-charcoal/10 px-1 py-0.5 font-mono text-[11px] text-oxblood">
          {earliest.content}
        </code>
      );
    } else if (earliest.type === 'italic') {
      parts.push(
        <em key={key++} className="font-serif italic text-charcoal/90">
          {earliest.content}
        </em>
      );
    }

    remaining = remaining.slice(earliest.index + earliest.length);
  }

  return parts;
}

