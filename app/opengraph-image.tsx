import { ImageResponse } from 'next/og';
import { readFileSync } from 'fs';
import { join } from 'path';

export const dynamic = 'force-static';

export const alt = 'FreeMemory – Free Phone Cleaner & Duplicate Photo Remover for Android';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  const logoData = readFileSync(join(process.cwd(), 'public/app-logo.png'));
  const logoSrc = `data:image/png;base64,${logoData.toString('base64')}`;

  const badges = [
    { icon: '🚫', label: 'No Ads' },
    { icon: '🔒', label: 'No Internet' },
    { icon: '💸', label: 'Free Forever' },
    { icon: '⭐', label: '4.4 Rating' },
    { icon: '📲', label: '10K+ Downloads' },
  ];

  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #0D1118 0%, #141C35 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '72px 80px',
        }}
      >
        {/* App icon + name */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <img src={logoSrc} width={72} height={72} style={{ borderRadius: '18px' }} />
          <span style={{ fontSize: '40px', fontWeight: '700', color: '#ffffff', letterSpacing: '-0.5px' }}>
            FreeMemory
          </span>
          <div
            style={{
              display: 'flex',
              marginLeft: '8px',
              background: 'rgba(58, 82, 245, 0.25)',
              border: '1px solid rgba(58, 82, 245, 0.55)',
              borderRadius: '8px',
              padding: '6px 16px',
              fontSize: '20px',
              color: '#7B93FF',
              fontWeight: '600',
            }}
          >
            Android
          </div>
        </div>

        {/* Tagline + description */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div
            style={{
              fontSize: '58px',
              fontWeight: '800',
              color: '#ffffff',
              lineHeight: '1.1',
              letterSpacing: '-1.5px',
              maxWidth: '960px',
            }}
          >
            Free Phone Cleaner & Duplicate Photo Remover
          </div>
          <div style={{ fontSize: '27px', color: 'rgba(240, 244, 255, 0.62)' }}>
            Clean duplicates, large files & optimize images — fully offline
          </div>
        </div>

        {/* Badges */}
        <div style={{ display: 'flex', gap: '14px' }}>
          {badges.map((b) => (
            <div
              key={b.label}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                background: 'rgba(255, 255, 255, 0.07)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '12px',
                padding: '12px 20px',
                fontSize: '21px',
                color: '#F0F4FF',
                fontWeight: '600',
              }}
            >
              <span>{b.icon}</span>
              <span>{b.label}</span>
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size },
  );
}
