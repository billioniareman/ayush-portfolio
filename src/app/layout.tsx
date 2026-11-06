import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { site } from '@/data/site';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: {
    default: `${site.name} — ${site.brandName} | AI & Backend Engineer`,
    template: `%s | ${site.name} — ${site.brandName}`,
  },
  description: `${site.positioning} ${site.philosophy} ${site.description}`,
  openGraph: {
    title: `${site.name} — ${site.brandName} (1919 Industrial Engineering Ledger)`,
    description: site.description,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${site.name} — ${site.brandName}`,
    description: site.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Besley:ital,wght@0,600;0,700;0,800;0,900;1,700;1,900&family=Cinzel:wght@600;700;800;900&family=IBM+Plex+Mono:ital,wght@0,400;0,500;0,600;1,400&family=Libre+Franklin:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&family=Oswald:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,600;0,700;0,900;1,400&family=Rokkitt:wght@700;800;900&family=Ultra&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-charcoal text-ivory antialiased selection:bg-oxblood selection:text-ivory">
        {/* Subtle SVG tactile grain texture across the whole page */}
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 z-40 opacity-[0.035] mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />
        <Header />
        <main className="relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
