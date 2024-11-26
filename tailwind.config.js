import { fontFamily } from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				serif: ["var(--font-nunito-sans)", ...fontFamily.serif],
			},
		},
	},
	plugins: [],
};
