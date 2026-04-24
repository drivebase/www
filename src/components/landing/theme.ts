export const A_ACCENT = 'rgb(var(--color-primary-rgb))';
export const A_ACCENT2 = 'rgb(var(--color-primary-hover-rgb))';

export const color = {
  background: 'rgb(var(--color-background-rgb))',
  foreground: 'rgb(var(--color-foreground-rgb))',
  surface: 'rgb(var(--color-surface-rgb))',
  surfaceRaised: 'rgb(var(--color-surface-raised-rgb))',
  border: 'rgb(var(--color-border-rgb))',
  muted: 'rgb(var(--color-muted-rgb))',
  mutedForeground: 'rgb(var(--color-muted-foreground-rgb))',
  primary: A_ACCENT,
  primaryHover: A_ACCENT2,
  primaryForeground: 'rgb(var(--color-primary-foreground-rgb))',
  secondary: 'rgb(var(--color-secondary-rgb))',
  accent: 'rgb(var(--color-accent-rgb))',
  success: 'rgb(var(--color-success-rgb))',
  warning: 'rgb(var(--color-warning-rgb))',
  destructive: 'rgb(var(--color-destructive-rgb))',
};

export const alpha = (rgbVar: string, value: number) => `rgb(${rgbVar} / ${value})`;
export const primaryAlpha = (value: number) => alpha('var(--color-primary-rgb)', value);
export const foregroundAlpha = (value: number) => alpha('var(--color-foreground-rgb)', value);

export const colorWithAlpha = (value: string, opacity: number) => {
  if (value.startsWith('rgb(var(')) {
    return value.replace(/\)\s*$/, ` / ${opacity})`);
  }

  if (value.startsWith('#')) {
    const alphaHex = Math.round(opacity * 255).toString(16).padStart(2, '0');
    return `${value}${alphaHex}`;
  }

  return value;
};
