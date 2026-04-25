import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Contact – FreeMemory',
  description: 'Get in touch with the FreeMemory team for support, feedback, or questions.',
  alternates: { canonical: '/contact' },
};

export default function ContactPage() {
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
          <h1>Contact Us</h1>
          <p className="legal-date">We&apos;d love to hear from you.</p>

          <section>
            <h2>Support &amp; Feedback</h2>
            <p>
              For bug reports, feature requests, or general feedback, email us at{' '}
              <a href="mailto:prateek.gupta.dev@gmail.com">prateek.gupta.dev@gmail.com</a>.
            </p>
          </section>

          <section>
            <h2>Google Play Reviews</h2>
            <p>
              You can also leave feedback directly on the{' '}
              <a
                href="https://play.google.com/store/apps/details?id=com.pg.freememory"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google Play Store listing
              </a>
              . We read every review.
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
