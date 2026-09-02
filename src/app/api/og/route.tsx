import { ImageResponse } from 'next/og';
import { profile } from '@/data/profile';

export const runtime = 'edge';

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          backgroundColor: 'hsl(222 20% 6%)',
          backgroundImage:
            'radial-gradient(circle at 15% 15%, hsl(158 64% 45% / 0.35), transparent 45%), radial-gradient(circle at 85% 85%, hsl(145 45% 65% / 0.25), transparent 45%)',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 16,
          }}
        >
          <div
            style={{
              display: 'flex',
              height: 14,
              width: 14,
              borderRadius: 999,
              backgroundColor: 'hsl(158 64% 45%)',
            }}
          />
          <span style={{ fontSize: 28, color: 'hsl(158 64% 45%)', fontWeight: 600, letterSpacing: 2 }}>
            {profile.availability.toUpperCase()}
          </span>
        </div>

        <div
          style={{
            display: 'flex',
            marginTop: 36,
            fontSize: 76,
            fontWeight: 700,
            color: 'hsl(210 20% 96%)',
            lineHeight: 1.1,
          }}
        >
          {profile.name}
        </div>

        <div
          style={{
            display: 'flex',
            marginTop: 18,
            fontSize: 38,
            fontWeight: 500,
            backgroundImage: 'linear-gradient(90deg, hsl(158 64% 45%), hsl(145 45% 65%))',
            backgroundClip: 'text',
            color: 'transparent',
          }}
        >
          {profile.title}
        </div>

        <div
          style={{
            display: 'flex',
            marginTop: 40,
            fontSize: 26,
            color: 'hsl(210 20% 70%)',
            maxWidth: 900,
          }}
        >
          {profile.tagline}
        </div>

        <div
          style={{
            display: 'flex',
            marginTop: 'auto',
            fontSize: 24,
            color: 'hsl(210 20% 55%)',
          }}
        >
          waleedkhan.dev
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
