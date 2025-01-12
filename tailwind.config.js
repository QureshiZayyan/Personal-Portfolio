/** @type {import('tailwindcss').Config} */
import tailwindcssAnimate from 'tailwindcss-animate';

export default {
	darkMode: ["class"],
	content: [
		"./index.html",
		"./src/**/*.{js,jsx}",
	],
	theme: {
		extend: {
			backgroundColor: {
				bcg: "rgb(25, 25, 25)",
				bcolor: "#8252c6",
			},
			colors: {
				customGray: "rgb(234, 234, 234)",
				background: "hsl(var(--background))",
				foreground: "hsl(var(--foreground))",
				card: {
					DEFAULT: "hsl(var(--card))",
					foreground: "hsl(var(--card-foreground))",
				},
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			},
		},
	},
	plugins: [tailwindcssAnimate],
};
