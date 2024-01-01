import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      height: {
        'screen-1/2': '50vh',
        'screen-1/3': 'calc(100vh / 3)',
        'screen-2/3': 'calc(100vh / 3 * 2)',
        'screen-3/4': 'calc(100vh / 4 * 3)',
      },
    }
  },

  plugins: [
    require('@tailwindcss/typography'),
    require("daisyui")
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#009c8d",

          "secondary": "#00855f",

          "accent": "#007b00",

          "neutral": "#020506",

          "base-100": "#fff0ff",

          "info": "#0067da",

          "success": "#009136",

          "warning": "#f76100",

          "error": "#c50038",
        },
      },
    ],
  }
}
export default config
