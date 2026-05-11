/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: ['Georgia', 'Cambria', 'Times New Roman', 'serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'monospace']
      },
      colors: {
        ink: '#171717',
        paper: '#f7f7f2',
        line: '#d9d8cf',
        signal: '#0f766e',
        accent: '#b45309'
      },
      boxShadow: {
        soft: '0 18px 60px rgb(23 23 23 / 0.08)'
      }
    }
  },
  plugins: []
};
