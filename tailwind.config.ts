import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#FFFFFF',
      black: '#000000',
      blue: {
        light: '#5A8CF1',
        DEFAULT: '#316FEE',
      },
      grey: {
        light: '#999999',
        DEFAULT: '#666666',
      },
    },
    fontFamily: {
      sans: [
        'Roboto',
        'sans-serif',
      ],
    },
    fontSize: {
      'xxs': ['0.875rem', '1rem'],
      'xs': ['0.75rem', '1.125rem'],
      'sm': ['0.8rem', '1rem'],
      'base': ['1rem', '1.5rem'],
      'lg': ['1.125rem', '1.75rem'],
      'xl': ['1.25rem', '2.125rem'],
      'title-h1': ['3.5rem', '4.5rem'],
      'title-h3': ['1.5rem', '2rem'],
      'title-h4': ['1.25rem', '1.75rem'],
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1140px',
      '2xl': '1408px',
      '3xl': '1536px',
    },
    extend: {
      gridTemplateColumns: {
        header: '1fr auto 1fr',
      },
    },
    container: {
      screens: {
        lg: '100%',
        xl: '1024px',
      },
    },
  },
}
