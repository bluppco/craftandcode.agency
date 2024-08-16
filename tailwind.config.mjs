import { transform } from 'framer-motion';

/** @type {import('tailwindcss').Config} */
module.exports = {

	darkMode: ["class"],
  	content: [

    	"./pages/**/*.{js,jsx}",
    	"./components/**/*.{js,jsx}",
    	"./app/**/*.{js,jsx}",
    	"./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",

  	],
  	prefix: "",
  	theme: {

		container: {

			center: true,
      		padding: "2rem",
      		screens: {
        		"2xl": "1400px",
      		},

		},
    	extend: {

			keyframes: {

				"accordion-down": {

					from: { height: "0" },
          			to: { height: "var(--radix-accordion-content-height)" },

				},
        		"accordion-up": {

					from: { height: "var(--radix-accordion-content-height)" },
          			to: { height: "0" },

				},
				"slide-left": {

					from: { transform: "translateX(0)" },
					to: { transform: "translateX(-100%)" }

				},
				"slide-right": {

					from: { transform: "translateX(-100%)" },
					to: { transform: "translateX(0)" }

				},
				
      		},
      		animation: {

				"accordion-down": "accordion-down 0.2s ease-out",
        		"accordion-up": "accordion-up 0.2s ease-out",
				"slide-left": "slide-left 25s infinite linear",
				"slide-right": "slide-right 25s infinite linear",

			},
			colors: {

				"light_green": "#78f297",

			},
			fontFamily: {

				"good_sans": [ "Good Sans", "sans-serif" ],
				"gyst_variable": [ "gyst-variable", "sans-serif" ],
				"neue_haas_grotesk_display": [ "neue-haas-grotesk-display", "sans-serif" ],
				"work_sans": [ "work-sans", "sans-serif" ],

			}

		}

	},
  	plugins: [require("tailwindcss-animate")],

}
