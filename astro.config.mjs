// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [react()],

  redirects: {
    '/install': 'https://raw.githubusercontent.com/drivebase/drivebase/refs/heads/main/scripts/install.sh'
  }
});