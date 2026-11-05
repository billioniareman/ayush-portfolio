import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { site } from '@/data/site';
export const metadata: Metadata = { metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'), title: { default: 'Ayush Patidar — AI + Backend + Product Engineer', template: '%s | Ayush Patidar' }, description: site.description, openGraph: { title: 'Ayush Patidar — AI + Backend + Product Engineer', description: site.description, type: 'website' }, twitter: { card: 'summary_large_image', title: 'Ayush Patidar', description: site.description } };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body><Header/><main>{children}</main><Footer/></body></html>; }
