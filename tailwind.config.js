const { join } = require('path');

module.exports = {
  content: [join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}')],
  theme: {
    extend: {
      colors: {
        'content-dark': '#28243D',
        'content-light': '#ffffff',
        base: '#F7F6F9',
        primary: '#4F4CCF',
        secondary: '#E0E0E8',
        accent: '#33ABEE',
        success: '#8FE567',
        warning: '#ECB562',
        info: '#67DDE5',
        danger: '#E0545C',
        light: '#ffffff',
        dark: '#1E1E1E',
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
