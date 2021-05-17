import { defineConfig } from 'vite-plugin-windicss'
import colors from 'windicss/colors'
import typography from 'windicss/plugin/typography'
import animations from '@windicss/animations'

export default defineConfig({
  extract: {
    include: [
      'index.html',
      'pages/**/*.md',
      'src/**/*.{vue,ts}',
    ],
  },
  darkMode: 'class',
  plugins: [
    typography(),
    animations({
      settings: {
        animatedSpeed: 1000,
        heartBeatSpeed: 1000,
        hingeSpeed: 2000,
        bounceInSpeed: 750,
        bounceOutSpeed: 750,
        animationDelaySpeed: 300,
      },
    }),
  ],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '65ch',
            color: 'inherit',
            a: {
              'color': 'inherit',
              'opacity': 0.75,
              'fontWeight': '500',
              'textDecoration': 'underline',
              '&:hover': {
                opacity: 1,
                color: colors.teal[600],
              },
            },
            b: { color: 'inherit' },
            strong: { color: 'inherit' },
            em: { color: 'inherit' },
            h1: { color: 'inherit' },
            h2: { color: 'inherit' },
            h3: { color: 'inherit' },
            h4: { color: 'inherit' },
            code: { color: 'inherit' },
          },
        },
      },
      colors: {
        dracula: '#BF95F9',
        buffy: '#FF7AC6',
        vonCount: '#6272a4',
        cullen: '#f8f8f2',
        aro: '#44475a',
        nosferatu: '#282a36',
        morbius: '#ffb86c',
        blade: '#50fa7b',
        lincoln: '#f1fa8c',
        marcilin: '#ff5555',
        vanHelsing: '#8be9fd',
      },
    },
  },
})
