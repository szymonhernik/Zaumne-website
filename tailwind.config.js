/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'zaumne-blue': '#263567',
        'zaumne-bordo': '#41272c',
        'zaumne-pink': '#f7b0be',
      },
      screens: {
        'big-tablet': '926px',
      },
      boxShadow: {
        zaumne: '0px 6.625px 6.625px 0px rgba(0, 0, 0, 0.25);',
      },
      fontSize: {
        'zaumne-title': '3vw',
      },
    },
    // Overriding fontFamily to use @next/font loaded families
    fontFamily: {
      mono: 'var(--font-mono)',
      sans: 'var(--font-sans)',
      serif: 'var(--font-serif)',
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
