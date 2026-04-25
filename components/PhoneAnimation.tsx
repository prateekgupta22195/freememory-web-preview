'use client';

import { useEffect, useRef, useState } from 'react';
import './PhoneAnimation.css';

const CATEGORIES = [
  { emoji: '🔁', label: 'Duplicate Photos',  color: '#3A52F5', count: 127, size: '2.4 GB' },
  { emoji: '🖼️', label: 'Large Images',      color: '#9B27AF', count: 84,  size: '1.8 GB' },
  { emoji: '🎬', label: 'Large Videos',      color: '#E05252', count: 12,  size: '3.2 GB' },
  { emoji: '📁', label: 'Large Files',       color: '#FF8F00', count: 34,  size: '650 MB' },
  { emoji: '📸', label: 'Screenshots',       color: '#E91E8C', count: 256, size: '890 MB' },
  { emoji: '✨', label: 'Optimise Images',   color: '#27AE60', count: 92,  size: '~1.1 GB' },
];

const RESULT_THUMBS: string[][] = [
  ['10', '10', '11'],
  ['20', '21', '22'],
  ['30', '31', '32'],
  ['40', '41', '42'],
  ['50', '51', '52'],
  ['60', '61', '62'],
];

const DUP_GROUPS: { seed: string; copies: number }[] = [
  { seed: '10', copies: 3 },
  { seed: '20', copies: 2 },
  { seed: '30', copies: 2 },
];

const thumb = (seed: string) => `https://picsum.photos/seed/${seed}/64/64`;

const PHASE1_DURATION = 6200;

export default function PhoneAnimation() {
  const [phase, setPhase] = useState<0 | 1 | 2>(0);
  const [progress, setProgress] = useState(0);
  const [fading, setFading] = useState(false);
  const [highlightDup, setHighlightDup] = useState(false);
  const resultListRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const durations: Record<number, number> = { 0: 4500, 1: PHASE1_DURATION, 2: 3800 };
    const total = durations[phase];
    const timers: ReturnType<typeof setTimeout>[] = [];

    if (phase === 1) {
      timers.push(setTimeout(() => setHighlightDup(true), 5000));
    }

    timers.push(setTimeout(() => {
      setFading(true);
      setTimeout(() => {
        setHighlightDup(false);
        setProgress(0);
        setPhase(p => ((p + 1) % 3) as 0 | 1 | 2);
        setFading(false);
      }, 350);
    }, total));

    return () => timers.forEach(clearTimeout);
  }, [phase]);

  useEffect(() => {
    if (phase !== 1) return;
    const list = resultListRef.current;
    if (!list) return;
    const timers: ReturnType<typeof setTimeout>[] = [];
    timers.push(setTimeout(() => { list.scrollTo({ top: list.scrollHeight, behavior: 'smooth' }); }, 700));
    timers.push(setTimeout(() => { list.scrollTo({ top: 0, behavior: 'smooth' }); }, 3200));
    return () => timers.forEach(clearTimeout);
  }, [phase]);

  useEffect(() => {
    if (phase !== 0) return;
    const id = setInterval(() => {
      setProgress(p => {
        if (p >= 100) { clearInterval(id); return 100; }
        return p + 1;
      });
    }, 42);
    return () => clearInterval(id);
  }, [phase]);

  const R = 34;
  const circ = 2 * Math.PI * R;
  const offset = circ * (1 - progress / 100);

  return (
    <div className={`pa-phone ${fading ? 'pa-fade-out' : 'pa-fade-in'}`}>
      <div className="pa-status">
        <span>9:41</span>
        <div className="pa-status-right">
          <span className="pa-sig">▪▪▪</span>
          <span className="pa-bat">▮</span>
        </div>
      </div>

      {phase === 0 && (
        <div className="pa-screen pa-scanning">
          <div className="pa-header">
            <div className="pa-h-title">Scanning your device</div>
            <div className="pa-h-sub">Analysing files on storage…</div>
          </div>
          <div className="pa-divider" />
          <div className="pa-progress-card">
            <div className="pa-wait">Please wait</div>
            <div className="pa-linear-track">
              <div className="pa-linear-fill" style={{ width: `${progress}%` }} />
            </div>
            <div className="pa-circle-wrap">
              <svg width="76" height="76" viewBox="0 0 76 76">
                <circle cx="38" cy="38" r={R} fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="5" />
                <circle
                  cx="38" cy="38" r={R}
                  fill="none" stroke="#3A52F5" strokeWidth="5" strokeLinecap="round"
                  strokeDasharray={circ} strokeDashoffset={offset}
                  style={{ transform: 'rotate(-90deg)', transformOrigin: '38px 38px', transition: 'stroke-dashoffset 0.08s linear' }}
                />
              </svg>
              <div className="pa-pct">{progress}%</div>
            </div>
          </div>
          <div className="pa-found-label">Found so far</div>
          <div className="pa-scan-list">
            {CATEGORIES.map((cat, i) => {
              const step = Math.max(0, progress - i * 12);
              const max = 100 - i * 12;
              const shown = Math.min(Math.floor((step / max) * cat.count), cat.count);
              return (
                <div key={i} className="pa-scan-row" style={{ opacity: progress > i * 12 ? 1 : 0.25 }}>
                  <div className="pa-scan-icon" style={{ background: cat.color + '25', color: cat.color }}>{cat.emoji}</div>
                  <div className="pa-scan-text">
                    <div className="pa-scan-name">{cat.label}</div>
                    <div className="pa-scan-found">{shown} found</div>
                  </div>
                  <div className="pa-scan-count" style={{ color: cat.color }}>{shown}</div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {phase === 1 && (
        <div className="pa-screen pa-results">
          <div className="pa-header">
            <div className="pa-h-title">Scan Complete ✓</div>
            <div className="pa-h-sub">Review what can be freed</div>
          </div>
          <div className="pa-divider" />
          <div className="pa-summary-card">
            <div className="pa-sum-label">Total you can free</div>
            <div className="pa-sum-size">8.1 GB</div>
            <div className="pa-sum-btn">Start Cleaning</div>
          </div>
          <div className="pa-found-label">Categories</div>
          <div className="pa-result-list" ref={resultListRef}>
            {CATEGORIES.map((cat, i) => (
              <div key={i} className={`pa-result-card${i === 0 && highlightDup ? ' pa-highlight' : ''}`}>
                <div className="pa-result-thumbs">
                  {RESULT_THUMBS[i].map((seed, j) => (
                    <img key={j} className="pa-result-thumb" src={thumb(seed)} alt="" />
                  ))}
                </div>
                <div className="pa-result-body">
                  <div className="pa-result-icon" style={{ background: cat.color + '25', color: cat.color }}>{cat.emoji}</div>
                  <div className="pa-result-text">
                    <div className="pa-result-title">{cat.label}</div>
                    <div className="pa-result-sub">{cat.count} files · {cat.size}</div>
                  </div>
                </div>
                <div className="pa-result-btn" style={{ background: cat.color }}>Review →</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {phase === 2 && (
        <div className="pa-screen pa-duplicates">
          <div className="pa-topbar">
            <span className="pa-back">‹</span>
            <span className="pa-topbar-title">Duplicate Media</span>
            <span className="pa-topbar-action">Select All</span>
          </div>
          <div className="pa-dup-list">
            {DUP_GROUPS.map((group, gi) => (
              <div key={gi} className="pa-dup-group">
                <div className="pa-dup-group-header">
                  <span className="pa-dup-count">{group.copies - 1} duplicate{group.copies > 2 ? 's' : ''}</span>
                  <span className="pa-dup-action">Select extras</span>
                </div>
                <div className="pa-dup-thumbs">
                  {Array.from({ length: group.copies }).map((_, ti) => (
                    <div key={ti} className={`pa-dup-thumb-wrap ${ti > 0 ? 'pa-dup-selected' : ''}`}>
                      <img className="pa-dup-img" src={thumb(group.seed)} alt="" />
                      {ti > 0 && <div className="pa-dup-check">✓</div>}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="pa-delete-bar">
            <div className="pa-delete-btn">Delete 127 files · 2.4 GB</div>
          </div>
        </div>
      )}
    </div>
  );
}
