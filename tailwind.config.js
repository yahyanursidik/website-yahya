/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
  ],
  darkMode: "class",
  theme: {
      extend: {
          colors: {
              "secondary-fixed-dim": "#c3c7cc",
              "on-surface": "#1a1c1c",
              "on-tertiary-fixed-variant": "#434a2b",
              "inverse-on-surface": "#f0f1f1",
              "surface-container": "#eeeeee",
              "surface-container-high": "#e8e8e8",
              "surface-variant": "#e2e2e2",
              "background": "#f9f9f9",
              "on-tertiary-container": "#a2aa85",
              "surface-dim": "#dadada",
              "on-primary-fixed-variant": "#274e3d",
              "secondary-fixed": "#e0e3e8",
              "surface-container-highest": "#e2e2e2",
              "outline": "#717973",
              "on-surface-variant": "#414844",
              "primary": "#012d1d",
              "tertiary-fixed": "#dfe7bd",
              "error-container": "#ffdad6",
              "primary-fixed-dim": "#a5d0b9",
              "tertiary": "#22290e",
              "tertiary-container": "#383f22",
              "on-error": "#ffffff",
              "tertiary-fixed-dim": "#c3cba3",
              "primary-fixed": "#c1ecd4",
              "on-background": "#1a1c1c",
              "on-primary": "#ffffff",
              "primary-container": "#1b4332",
              "outline-variant": "#c1c8c2",
              "surface-container-low": "#f3f3f3",
              "inverse-surface": "#2f3131",
              "secondary": "#5b5f63",
              "surface-container-lowest": "#ffffff",
              "on-primary-fixed": "#002114",
              "on-tertiary": "#ffffff",
              "on-error-container": "#93000a",
              "surface": "#f9f9f9",
              "on-secondary-fixed": "#181c20",
              "on-secondary": "#ffffff",
              "inverse-primary": "#a5d0b9",
              "on-secondary-container": "#5f6368",
              "on-primary-container": "#86af99",
              "surface-bright": "#f9f9f9",
              "secondary-container": "#dde0e5"
          },
          fontFamily: {
              "headline": ["Noto Serif", "serif"],
              "body": ["Inter", "sans-serif"],
              "label": ["Inter", "sans-serif"]
          },
          borderRadius: {
              "DEFAULT": "0.125rem",
              "lg": "0.25rem",
              "xl": "0.5rem",
              "full": "0.75rem"
          },
      },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries')
  ],
}
