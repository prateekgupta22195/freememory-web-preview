import type { Metadata, Viewport } from 'next';
import './globals.css';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#3A52F5',
};

export const metadata: Metadata = {
  title: 'FreeMemory – Free Phone Cleaner & Duplicate Photo Remover for Android',
  description:
    'FreeMemory is a free Android app that removes duplicate photos, large files & optimizes images — no ads, no internet, no paywalls. 10K+ downloads, rated 4.5★. Download free on Google Play.',
  metadataBase: new URL('https://freememory.app'),
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: 'https://freememory.app/',
    siteName: 'FreeMemory',
    title: 'FreeMemory – Free Phone Cleaner & Duplicate Photo Remover for Android',
    description:
      'Remove duplicate photos, large files & optimize images on Android — no ads, no internet, no paywalls. Free forever. 10K+ downloads, rated 4.5★.',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FreeMemory – Free Phone Cleaner & Duplicate Photo Remover for Android',
    description:
      'Remove duplicate photos, large files & optimize images on Android — no ads, no internet, no paywalls. Free forever.',
  },
  robots: { index: true, follow: true },
  icons: { icon: '/favicon.ico', apple: '/logo192.png' },
  manifest: '/manifest.json',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
