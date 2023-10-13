const { join } = require('path');

module.exports = {
  content: [join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}')],
  theme: {
    extend: {
      colors: {
        base: {
          default: '#F7F6F9',
          content: '#28243D',
        },
        primary: {
          default: '#4F4CCF',
          content: '#ffffff',
        },
        secondary: {
          default: '#E0E0E8',
          content: '#28243D',
        },
        accent: {
          default: '#33ABEE',
          content: '#ffffff',
        },
        success: {
          default: '#8FE567',
          content: '#ffffff',
        },
        warning: {
          default: '#ECB562',
          content: '#ffffff',
        },
        info: {
          default: '#67DDE5',
          content: '#ffffff',
        },
        danger: {
          default: '#E0545C',
          content: '#ffffff',
        },
        light: {
          default: '#ffffff',
          content: '#28243D',
        },
        dark: {
          default: '#1E1E1E',
          content: '#ffffff',
        },
      },
      height: {
        sm: '24px',
        md: '32px',
        lg: '42px',
        xl: '84px',
        '2xl': '120px',
      },
      borderRadius: {
        sm: '4px',
        md: '8px',
        lg: '12px',
        full: '50%',
      },
      boxShadow: {
        sm: 'rgba(30, 30, 30, 0.25) 0px 0px 1px',
        md: 'rgba(30, 30, 30, 0.45) 0px 0px 1px',
        lg: 'rgba(30, 30, 30, 0.45) 0px 0px 1px, rgba(30, 30, 30, 0.15) 0px 0px 2px 1px',
      },
      spacing: {
        sm: '0.5rem',
        md: '1.125rem',
        lg: '2.625rem',
        xl: '3.625rem',
        '2xl': '4.625rem',
      },
      fontSize: {
        sm: '12px',
        md: '16px',
        lg: '24px',
        xl: '32px',
        '2xl': '42px',
      },
    },
  },
  plugins: [],
};
