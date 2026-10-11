/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: 'var(--color-bg)',
        surface: {
          DEFAULT: 'var(--color-surface)',
          elevated: 'var(--color-surface-elevated)',
          border: 'var(--color-border)',
          'border-hover': 'var(--color-border-hover)',
        },
        primary: {
          DEFAULT: '#8B5CF6', // Electric violet
          light: '#A78BFA',
          dark: '#7C3AED',
        },
        accent: {
          blue: '#3B82F6',   // Bright blue
          cyan: '#06B6D4',
          indigo: '#6366F1',
        },
        text: {
          primary: 'var(--color-text-primary)',
          secondary: 'var(--color-text-secondary)',
          muted: 'var(--color-text-muted)',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'Courier New', 'monospace'],
      },
      boxShadow: {
        'glow-violet': '0 0 35px -5px rgba(139, 92, 246, 0.25)',
        'glow-blue': '0 0 35px -5px rgba(59, 130, 246, 0.25)',
        'card': '0 10px 30px -10px rgba(0, 0, 0, 0.5)',
        'card-hover': '0 20px 40px -15px rgba(139, 92, 246, 0.15)',
      },
      keyframes: {
        'marquee-left-to-right': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        'marquee-right-to-left': {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'marquee-left-to-right': 'marquee-left-to-right 30s linear infinite',
        'marquee-right-to-left': 'marquee-right-to-left 30s linear infinite',
      }
    },
  },
  plugins: [],
}
