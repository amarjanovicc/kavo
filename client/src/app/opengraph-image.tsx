import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { ImageResponse } from 'next/og';

export const alt = 'Kavo Studio – osobni projekt: dizajn, branding i web development';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function OpengraphImage() {
  const logo = await readFile(join(process.cwd(), 'src/app/icon.png'));
  const logoSrc = `data:image/png;base64,${logo.toString('base64')}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: 72,
          background: '#080D10',
          color: '#EBECE7',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
          <img src={logoSrc} width={96} height={96} alt="" />
          <span style={{ fontSize: 64, fontWeight: 800, color: '#FFBD00', letterSpacing: -2 }}>kavo studio</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <span style={{ fontSize: 92, fontWeight: 800, lineHeight: 1, letterSpacing: -4 }}>Dizajn, branding</span>
          <span style={{ fontSize: 92, fontWeight: 800, lineHeight: 1, letterSpacing: -4 }}>i web development.</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 26, color: 'rgba(235,236,231,0.6)' }}>
          <span>Osobni projekt</span>
          <span>kavo.studio</span>
        </div>
      </div>
    ),
    size
  );
}
