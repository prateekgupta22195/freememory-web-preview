import React from 'react';
import './App.css';
import appLogo from './app-logo.png';
import appScreenshot from './app-screenshot.png';

function App() {
  const appInfo = {
    name: 'FreeMemory',
    tagline: 'Optimize your device\'s space',
    description: 'Free up memory, boost speed, and optimize your Android device with just one tap. Experience faster performance and longer battery life.',
    features: [
      'Duplicate file deletion',
      'Large files deletion',
      'Image files deletion',
      'Video files deletion'
    ],
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.pg.freememory',
    version: '1.0.9',
    downloads: '10K+',
    rating: '4.4',
    screenshot: appScreenshot,
    logo: 'https://via.placeholder.com/200/6a11cb/ffffff?text=FM'
  };

  const renderFeatureIcon = (feature: string) => {
    const commonProps = {
      xmlns: 'http://www.w3.org/2000/svg',
      width: 32,
      height: 32,
      viewBox: '0 0 24 24',
      fill: 'none',
      stroke: 'currentColor',
      strokeWidth: 2,
      strokeLinecap: 'round' as const,
      strokeLinejoin: 'round' as const,
      'aria-hidden': true
    };

    switch (feature) {
      case 'Duplicate file deletion':
        return (
          <svg {...commonProps}>
            <rect x="9" y="9" width="13" height="13" rx="2" />
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
          </svg>
        );
      case 'Large files deletion':
        return (
          <svg {...commonProps}>
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <path d="M14 2v6h6" />
            <path d="M12 12v6" />
            <path d="M9 15h6" />
          </svg>
        );
      case 'Image files deletion':
        return (
          <svg {...commonProps}>
            <rect x="3" y="5" width="18" height="14" rx="2" />
            <path d="M8.5 11.5h.01" />
            <path d="M21 15l-5-5L5 21" />
          </svg>
        );
      case 'Video files deletion':
        return (
          <svg {...commonProps}>
            <path d="M14 11l-3 2V9z" />
            <rect x="3" y="7" width="18" height="14" rx="2" />
          </svg>
        );
      default:
        return (
          <svg {...commonProps}>
            <path d="M12 2v20" />
            <path d="M2 12h20" />
          </svg>
        );
    }
  };

  return (
    <div className="app">
      <header className="header">
        <div className="container">
          <div className="logo">
            <img src={appLogo} alt={appInfo.name} />
            <h1>{appInfo.name}</h1>
          </div>
          <a href={appInfo.playStoreUrl} className="play-store-button" target="_blank" rel="noopener noreferrer">
            <img src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" alt="Get it on Google Play" />
          </a>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="container">
            <div className="hero-content">
              <h2>{appInfo.tagline}</h2>
              <p>{appInfo.description}</p>
              <div className="app-stats">
                <div className="stat">
                  <span className="stat-value">{appInfo.rating} ★</span>
                  <span className="stat-label">Rating</span>
                </div>
                <div className="stat">
                  <span className="stat-value">{appInfo.downloads}</span>
                  <span className="stat-label">Downloads</span>
                </div>
                <div className="stat">
                  <span className="stat-value">v{appInfo.version}</span>
                  <span className="stat-label">Version</span>
                </div>
              </div>
              <a href={appInfo.playStoreUrl} className="cta-button" target="_blank" rel="noopener noreferrer">
                Download Now
              </a>
            </div>
            <div className="screenshot">
              <img src={appInfo.screenshot} alt={`${appInfo.name} App Screenshot`} />
            </div>
          </div>
        </section>

        <section className="features">
          <div className="container">
            <h2>Key Features</h2>
            <div className="features-grid">
              {appInfo.features.map((feature, index) => (
                <div key={index} className="feature-card">
                  <div className="feature-icon">
                    {renderFeatureIcon(feature)}
                  </div>
                  <h3>{feature}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <p> {new Date().getFullYear()} {appInfo.name}. All rights reserved.</p>
          <div className="footer-links">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
            <a href="#contact">Contact Us</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
