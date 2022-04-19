module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layout/**/*.{js,ts,jsx,tsx}",

  ],
  theme: {
    container: {
      screens: {
        sm: "100%",
        md: "100%",
        lg: "1024px",
        xl: "1200px",
      }
    },
    extend: {
      colors: {
        secondaryText: '#CAD0DC',
        main: '#5C626E',
        titleText: '#001A4C',
        lightBlue: '#E6EEFF',
        lightBlueHover: '#CCDDFF',
        bgColor: '#F8F8FA',
        alertGreen: '#69DB6E',
        menuColor: '#848A96',
        garantiGreen: '#00673F',

        'makdos-table': {
          'th-bg': '#002366',
          'th-text': '#d2d0d0',
          'tr-even': '#ffffff',
          'td-color': '#767676',
        },

        primary: {
          hover: '#0046CC',
          DEFAULT: '#0057FF',
          tertiary: '#CCDDFF',
          disabled: '#d8d8d8',
        },
        passive: '#999999',
        background: {
          gray: '#1f2d3d',
          passive: '#3c4858',
          makdosSecondaryGray: '#F1F1F1',
          DEFAULT: '#1f2d3d',
          popup: '#e0e6ed',
          table: '#f9fafc',
        },
        alert: {
          red: '#FF5050',
          green: '#4BBD50',
          yellow: '#FFC350',
          blue: '#508BFF',
        },

      },
      width: {
        22: '5.6rem',
        50: '12.5rem',
        90: '23rem',
        100: '25rem',
        104: '26rem',
        108: '27rem',
        112: '28rem',
        116: '29rem',
        120: '30rem',
      },
      height: {
        22: '5.6rem',
        50: '12.5rem',
        100: '25rem',
        104: '26rem',
        108: '27rem',
        112: '28rem',
        116: '29rem',
        120: '30rem',
        150: '40rem',
        180: '50rem'
      },
      maxHeight: {
        "198px": "198px",
        "440px": '440px',
        "336px": '336px',
        "740px": '740px',

      },
      inset: {
        22: '5.6rem',
        50: '12.5rem',
        100: '25rem',
        104: '26rem',
        108: '27rem',
        112: '28rem',
        116: '29rem',
        120: '30rem',
        'a4': '795px'
      },

    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}
