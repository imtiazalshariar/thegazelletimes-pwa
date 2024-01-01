import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {},

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
