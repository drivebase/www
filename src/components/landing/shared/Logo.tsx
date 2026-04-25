import { primaryAlpha } from '../theme';

type LogoProps = {
  className?: string;
};

export const Logo = ({ className = '' }: LogoProps) => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 268 268"
    role="img"
    aria-hidden="true"
    className={`h-7 w-7 shrink-0 rounded-lg object-contain shadow-[0_4px_16px_-4px_var(--logo-shadow)] ${className}`}
    style={
      {
        '--logo-shadow': primaryAlpha(0.5),
        width: '28px',
        height: '28px',
      } as React.CSSProperties
    }
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="drivebase-logo-gradient" x1="64.8698395%" y1="29.7646741%" x2="32.017623%" y2="84.4583957%">
        <stop stopColor="color(display-p3 0.286 0.612 0.682)" offset="0%" />
        <stop stopColor="color(display-p3 0.314 0.480 0.605)" offset="100%" />
      </linearGradient>
    </defs>
    <path
      d="M134,0 C208.006156,0 268,59.9938435 268,134 C268,208.006156 208.006156,268 134,268 C59.9938435,268 0,208.006156 0,134 C0,59.9938435 59.9938435,0 134,0 Z M134,73 C100.31063,73 73,100.31063 73,134 C73,167.68937 100.31063,195 134,195 C167.68937,195 195,167.68937 195,134 C195,100.31063 167.68937,73 134,73 Z"
      fill="url(#drivebase-logo-gradient)"
    />
  </svg>
);
