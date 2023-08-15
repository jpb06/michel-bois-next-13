/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx,mdx}'],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        noise: "url('/img/noise-2.svg')",
      },
      keyframes: {
        'move-down-keyframe': {
          '0%': { top: 0 },
          '100%': { top: 25 },
        },
      },
      animation: {
        'move-down': 'move-down-keyframe 1s ease-in-out',
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        light: {
          primary: '#155e75',
          secondary: '#075985',
          accent: '#0369a1',
          neutral: '#2a1f2e',
          'base-100': '#e7e7f3',
          info: '#8caaf8',
          success: '#10b981',
          warning: '#a27106',
          error: '#e82626',
        },
        dark: {
          primary: '#0369a1',
          secondary: '#155e75',
          accent: '#0891b2',
          neutral: '#0c4a6e',
          'base-100': '#171717',
          info: '#164e63',
          success: '#14b8a6',
          warning: '#d97706',
          error: '#e11d48',
        },
      },
    ],
    darkTheme: 'dark',
  },
};
