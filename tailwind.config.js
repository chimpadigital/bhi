const defaultTheme = require('tailwindcss/defaultTheme')
/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
module.exports = {
  theme: {
    backgroundSize: {
      auto: 'auto',
      cover: 'cover',
      contain: 'contain',
      '100%': '100% auto'
    },
    container: {
      center: true,
      screens: {
        sm: '100%',
        md: '100%',
        lg: '1024px',
        xl: '1166px'
      }
    },
    boxShadow: {
      primary: '10px 10px 20px rgba(0, 0, 0, 0.2)',
      secondary: '-10px 10px 20px rgba(0, 0, 0, 0.2)',
      r: '20px 10px 20px rgba(0, 0, 0, 0.2)'
    },
    extend: {
      colors: {
        bhi: {
          primary: '#00008B',
          secondary: '#0099FF',
          aux: '#E4F4FF'
        }
      },
      fontFamily: {
        euclid: ['Euclid Circular A', ...defaultTheme.fontFamily.sans]
      },
      fontSize: {
        xxs: '0.65rem',
        10: '10px',
        13: '13px',
        15: '15px'
      }
    }
  },
  variants: {
    margin: ['responsive', 'last', 'hover', 'focus'],
    padding: ['responsive', 'last', 'hover', 'focus']
  },
  plugins: []
}
