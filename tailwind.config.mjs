import forms from '@tailwindcss/forms'

const config = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  plugins: [forms],
  theme: {
    container: {
      center: true,
      padding: '1.5rem',
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
    },
  },
}

export default config
