import type { Config } from 'tailwindcss';
const config: Config = { content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'], theme: { extend: { colors: { ink: '#0B0D10', panel: '#14171C', line: '#262B33', muted: '#969DA8', lime: '#B7F36B' }, fontFamily: { sans: ['Arial', 'Helvetica', 'sans-serif'], mono: ['ui-monospace', 'monospace'] } } }, plugins: [require('@tailwindcss/typography')] };
export default config;
