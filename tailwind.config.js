/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    'index.html', './src/**/*.{vue, js, ts, jsx, tsx}',
  ],
  theme: {
    extend: {
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
      colors:{
        transparent: 'transparent',
        black: '#000',
        white: '#fff',
        orange: '#EB6F25',
        sky:'#2F78EE',
        red: '#E03137',
        green: '#27A376',
        aquamarine:'#00A19B',
        grayscale: {
          100: '#f7fafc',
          200: '#F1F2F4',
          300: '#E9EAEC',
          700: '#687588'
        },
        blue:'#111827',
        alerts:'#E03137'
      },
      fontSize: {
        '1xl': '1.125rem',
      },
      borderColor:{
        'border-t-green': '#27A376'
      },
      borderWidth:{
        'border-t-4': '0.313rem'
      }
    }
  },
  plugins: [
    require('preline/plugin'),
    require('@tailwindcss/forms'),
  ]
}

