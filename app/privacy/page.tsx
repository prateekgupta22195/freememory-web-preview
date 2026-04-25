import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy – FreeMemory',
  description: 'FreeMemory collects no personal data, requires no internet, and never transmits your files or photos anywhere.',
  alternates: { canonical: '/privacy' },
};

export default function PrivacyPage() {
  return (
    <div className="app">
      <header className="header">
        <div className="container">
          <Link href="/" className="logo">
            <span className="logo-name">FreeMemory</span>
          </Link>
        </div>
      </header>

      <main className="legal-page">
        <div className="container">
          <h1>Privacy Policy</h1>
          <p className="legal-date">Last updated: April 2026</p>

          <section>
            <h2>No Data Collection</h2>
            <p>
              FreeMemory does not collect, store, or transmit any personal data. The app operates
              entirely on-device and has no internet permission — it is physically incapable of
              sending data anywhere.
            </p>
          </section>

          <section>
            <h2>What the App Accesses</h2>
            <p>
              FreeMemory accesses photos, videos, and files stored on your device solely to display
              them to you and perform actions you explicitly request (delete, compress). No file
              content ever leaves your device.
            </p>
          </section>

          <section>
            <h2>No Third-Party SDKs or Advertising</h2>
            <p>
              FreeMemory contains no advertising SDKs, analytics libraries, or tracking code. There
              are no ads, no crash reporters, and no telemetry.
            </p>
          </section>

          <section>
            <h2>Children&apos;s Privacy</h2>
            <p>
              FreeMemory complies with Google Play&apos;s Family Policy. It is safe for all ages
              and does not collect data from anyone, including children.
            </p>
          </section>

          <section>
            <h2>Contact</h2>
            <p>
              Questions about this policy?{' '}
              <Link href="/contact">Contact us</Link>.
            </p>
          </section>
        </div>
      </main>

      <footer className="footer">
        <div className="container">
          <p>© {new Date().getFullYear()} FreeMemory. All rights reserved.</p>
          <div className="footer-links">
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Service</Link>
            <Link href="/contact">Contact Us</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
