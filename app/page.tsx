import Image from 'next/image';
import PhoneAnimation from '@/components/PhoneAnimation';

const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=com.pg.freememory';

const features = [
  {
    emoji: '🔁',
    title: 'Duplicate Photo Remover',
    description: 'Find and delete duplicate photos and videos using exact file matching. Preview and remove extras with one tap.',
    gradientStart: '#3A52F5',
    gradientEnd: '#1F38CC',
  },
  {
    emoji: '🖼️',
    title: 'Large Image Cleaner',
    description: 'Surface your biggest photos and free up storage space. Full-resolution preview before deleting.',
    gradientStart: '#9B27AF',
    gradientEnd: '#6A1B9A',
  },
  {
    emoji: '🎬',
    title: 'Large Video Cleaner',
    description: 'Find the biggest videos eating your phone storage. Review in the built-in player, then delete.',
    gradientStart: '#E05252',
    gradientEnd: '#C0302B',
  },
  {
    emoji: '📁',
    title: 'Large File Manager',
    description: 'Forgotten ZIPs, leftover APKs, oversized documents — sorted by size so you see what is wasting space.',
    gradientStart: '#29ABE2',
    gradientEnd: '#0D7FC0',
  },
  {
    emoji: '📸',
    title: 'Screenshot Cleaner',
    description: 'Screenshots pile up and waste storage. Swipe through all your screenshots, keep what matters, delete the rest.',
    gradientStart: '#E91E8C',
    gradientEnd: '#9C27B0',
  },
  {
    emoji: '✨',
    title: 'Image Optimiser',
    description: 'Compress JPEG photos by up to 75% with no visible quality loss. Batch compress dozens of images — all on-device, offline.',
    gradientStart: '#27AE60',
    gradientEnd: '#1B7D45',
  },
];

const whyChoose = [
  {
    emoji: '🚫',
    title: 'No Ads — Ever',
    description: 'Zero ads, banners, or pop-ups. A storage optimizer built for users, not advertisers.',
    gradientStart: '#E05252',
    gradientEnd: '#C0302B',
  },
  {
    emoji: '💸',
    title: 'Free Forever',
    description: 'No premium tier, in-app purchases, or paywalls. Every clean-up tool is free today and always.',
    gradientStart: '#E91E8C',
    gradientEnd: '#9C27B0',
  },
  {
    emoji: '🔒',
    title: 'Private by Design',
    description: 'No network permissions. Cannot connect to the internet. Your files never leave your device.',
    gradientStart: '#1A2035',
    gradientEnd: '#0D1322',
  },
  {
    emoji: '📴',
    title: 'Works Offline',
    description: 'No Wi-Fi or mobile data needed. In flight mode? FreeMemory works everywhere.',
    gradientStart: '#29ABE2',
    gradientEnd: '#0D7FC0',
  },
  {
    emoji: '👨‍👩‍👧',
    title: 'Family Safe',
    description: 'Fully compliant with Google Play Family Policy. No ads, purchases, social features, or data collection.',
    gradientStart: '#E91E8C',
    gradientEnd: '#9C27B0',
  },
  {
    emoji: '🌗',
    title: 'Dark Mode & Tablet Ready',
    description: 'Follows your system theme automatically — light mode, dark mode, or Material You colors.',
    gradientStart: '#1A237E',
    gradientEnd: '#0D47A1',
  },
  {
    emoji: '🔓',
    title: 'Open Source',
    description: 'Full source code publicly available. No hidden behavior, no telemetry, no surprises.',
    gradientStart: '#27AE60',
    gradientEnd: '#1B7D45',
  },
];

const removes = [
  'Duplicate photos and videos',
  'Large images and camera photos',
  'Large videos taking up storage',
  'Large files — ZIPs, APKs, downloads, documents',
  'Screenshots and screen recordings',
  'Bloated JPEGs (compresses without deleting)',
  'Cache files and temp data',
  'WhatsApp and Telegram media files',
];

const appJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'FreeMemory',
  description:
    'Free Android phone storage cleaner. Remove duplicate photos and videos, large files, screenshots, and compress images — fully offline, no ads, no paywalls.',
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Android 6.0+',
  url: 'https://freememory.app/',
  downloadUrl: PLAY_STORE_URL,
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.4',
    bestRating: '5',
    ratingCount: '100',
  },
  author: { '@type': 'Person', name: 'Prateek Gupta' },
};

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'FreeMemory',
  url: 'https://freememory.app/',
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(appJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
      <div className="app">
        <header className="header">
          <div className="container">
            <div className="logo">
              <Image src="/app-logo.png" alt="FreeMemory" width={40} height={40} priority />
              <h1>FreeMemory</h1>
            </div>
            <a href={PLAY_STORE_URL} className="play-store-button" target="_blank" rel="noopener noreferrer">
              <img
                src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                alt="Get it on Google Play"
              />
            </a>
          </div>
        </header>

        <main>
          <section className="hero">
            <div className="container">
              <div className="hero-content">
                <h2>Free Phone Cleaner &amp; Duplicate Photo Remover</h2>
                <p>Clean duplicates, large files &amp; optimize images. No ads, no internet needed.</p>
                <div className="app-stats">
                  <div className="stat">
                    <span className="stat-value">4.4 ★</span>
                    <span className="stat-label">Rating</span>
                  </div>
                  <div className="stat">
                    <span className="stat-value">10K+</span>
                    <span className="stat-label">Downloads</span>
                  </div>
                  <div className="stat">
                    <span className="stat-value">v1.0.16</span>
                    <span className="stat-label">Version</span>
                  </div>
                </div>
                <a href={PLAY_STORE_URL} className="cta-button" target="_blank" rel="noopener noreferrer">
                  Download Free
                </a>
              </div>
              <div className="screenshot">
                <PhoneAnimation />
              </div>
            </div>
          </section>

          <section className="features">
            <div className="container">
              <h2>6 Powerful Clean-Up Tools</h2>
              <div className="features-grid">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="feature-card"
                    style={{
                      background: `linear-gradient(135deg, ${feature.gradientStart}, ${feature.gradientEnd})`,
                      boxShadow: `0 8px 24px ${feature.gradientStart}55`,
                    }}
                  >
                    <div className="feature-icon">{feature.emoji}</div>
                    <h3 className="feature-title-white">{feature.title}</h3>
                    <p className="feature-desc-white">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="why-section">
            <div className="container">
              <h2>Why Users Choose FreeMemory</h2>
              <div className="why-grid">
                {whyChoose.map((item, index) => (
                  <div key={index} className="why-card">
                    <span
                      className="why-emoji"
                      style={{ background: `linear-gradient(135deg, ${item.gradientStart}, ${item.gradientEnd})` }}
                    >
                      {item.emoji}
                    </span>
                    <div>
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="removes-section">
            <div className="container">
              <h2>What FreeMemory Removes</h2>
              <ul className="removes-list">
                {removes.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </section>
        </main>

        <footer className="footer">
          <div className="container">
            <p>© {new Date().getFullYear()} FreeMemory. All rights reserved.</p>
            <div className="footer-links">
              <a href="#privacy">Privacy Policy</a>
              <a href="#terms">Terms of Service</a>
              <a href="#contact">Contact Us</a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
