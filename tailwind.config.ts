
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				poppins: ['Poppins', 'sans-serif'],
				inter: ['Inter', 'sans-serif'],
			},
			colors: {
				// Market Garden Theme Colors
				emerald: {
					50: '#ecfdf5',
					100: '#d1fae5',
					200: '#a7f3d0',
					300: '#6ee7b7',
					400: '#34d399',
					500: '#10b981', // Primary emerald green
					600: '#059669',
					700: '#047857',
					800: '#065f46',
					900: '#064e3b',
				},
				clay: {
					50: '#faf6f3',
					100: '#f0e6df',
					200: '#e1cebf',
					300: '#d2b59e',
					400: '#c49c7f',
					500: '#b58463', // Primary clay brown
					600: '#a36d4e',
					700: '#8c5a3f',
					800: '#6d4730',
					900: '#573726',
				},
				cream: {
					50: '#fefdf9',
					100: '#fdf8ed',
					200: '#fbf0d1',
					300: '#f8e5af',
					400: '#f4d48a',
					500: '#f0c264', // Primary soft cream
					600: '#eab046',
					700: '#d29225',
					800: '#a9751e',
					900: '#87611d',
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				"accordion-down": {
					from: { height: "0" },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: "0" },
				},
				"basket-drop": {
					"0%": { transform: "translateY(-20px)", opacity: "0" },
					"100%": { transform: "translateY(0)", opacity: "1" }
				},
				"farm-to-you": {
					"0%": { transform: "translateX(0%)" },
					"100%": { transform: "translateX(100%)" }
				},
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
				"basket-drop": "basket-drop 0.5s ease-out",
				"farm-to-you": "farm-to-you 3s ease-in-out",
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
