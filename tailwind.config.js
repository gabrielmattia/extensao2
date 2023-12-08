/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue',
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        skin: {
          base: 'var(--color-text-base)',
          white: 'var(--color-fill)',
          'black-soft': 'var(--color-black-soft)',
          'black-mute': 'var(--color-black-mute)',
        },
      },
      backgroundColor: {
        skin: {
          fill: 'var(--color-background-base)',
          soft: 'var(--color-background-soft)',
          // 'bg-skin-btn-primary': 'var()',
          'btn-secondary': 'var(--bg-btn-secondary)',
          'btn-secondary-hover': 'var(--bg-btn-secondary-hover)',
          // 'btn-secondary-active': 'var()',
          // 'btn-secondary-disabled': 'var()',
        },
      },
      borderColor: {
        'btn-secondary-focus': 'var(--bd-color-btn-secondary-focus)',
        'nav-primary': 'var(--color-border)',
      },
      backgroundImage: {
        'back-arrow': 'url(\'../assets/images/left-arrow.svg\')',
      },
      gridTemplateColumns: {
        'custom-2': 'repeat(2, 280px)',
        'custom-3': 'repeat(3, 280px)',
        'custom-4': 'repeat(4, 280px)',
        'custom-5': 'repeat(5, 280px)',
        'custom--auto-fit': 'repeat(auto-fit, 280px)',
      },
      maxHeight: {
        'custom-home-sm': '480px',
        'custom-home-md': '570px',
        'custom-home-xl': '680px'
      }
    },
  },
  plugins: [require('daisyui')],
}
