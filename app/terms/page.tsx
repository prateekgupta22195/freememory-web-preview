import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms of Service – FreeMemory',
  description: 'Terms of Service for the FreeMemory Android app.',
  alternates: { canonical: '/terms' },
};

export default function TermsPage() {
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
          <h1>Terms of Service</h1>
          <p className="legal-date">Last updated: April 2026</p>

          <section>
            <h2>Use of the App</h2>
            <p>
              FreeMemory is a free Android utility app. By downloading or using FreeMemory you
              agree to these terms. The app is provided as-is, free of charge, with no warranty.
            </p>
          </section>

          <section>
            <h2>Your Responsibility</h2>
            <p>
              FreeMemory permanently deletes files when you confirm deletion. Deleted files cannot
              be recovered through the app. You are solely responsible for reviewing files before
              deleting them.
            </p>
          </section>

          <section>
            <h2>Intellectual Property</h2>
            <p>
              The FreeMemory name, logo, and app design are owned by Prateek Gupta. The source
              code is open source — see the repository for licence details.
            </p>
          </section>

          <section>
            <h2>Limitation of Liability</h2>
            <p>
              FreeMemory is not liable for any loss of data resulting from use of the app. Always
              back up important files before using any cleaning tool.
            </p>
          </section>

          <section>
            <h2>Changes to These Terms</h2>
            <p>
              We may update these terms from time to time. Continued use of the app after changes
              constitutes acceptance of the new terms.
            </p>
          </section>

          <section>
            <h2>Contact</h2>
            <p>
              Questions? <Link href="/contact">Contact us</Link>.
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
