import type { Metadata } from 'next';
import { Container } from '@/components/Container';
import { SectionHeading } from '@/components/SectionHeading';
import { ProjectCard } from '@/components/ProjectCard';
import { projects } from '@/data/projects';
export const metadata: Metadata = { title: 'Selected Work', description: 'Selected AI, backend, fintech, analytics, and product engineering case studies by Ayush Patidar.' };
export default function ProjectsPage(){return <Container className="py-20"><SectionHeading eyebrow="SELECTED WORK" title="Projects, problems, and engineering decisions." description="A closer look at products and systems I've contributed to or explored. Each case study distinguishes my contribution from the broader team effort."/><div className="grid gap-4 md:grid-cols-2">{projects.map((p,i)=><ProjectCard key={p.slug} project={p} index={i}/>)}</div></Container>;}
