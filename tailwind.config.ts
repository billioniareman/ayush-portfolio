import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './content/**/*.{md,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Master 1919 Birmingham Red Ledger Palette
        olive: {
          DEFAULT: '#85866D', // Aged Olive (Main editorial canvas)
          light: '#96977F',
          dark: '#6F7057',
          deep: '#5C5E48',
        },
        charcoal: {
          DEFAULT: '#252B27', // Deep Charcoal
          pure: '#1A1F1C',
          deep: '#151815',
          panel: '#202522',
        },
        forest: {
          DEFAULT: '#35443B', // Forest Green (Panels & secondary bg)
          dark: '#27342C',
          light: '#44564C',
        },
        sage: {
          DEFAULT: '#A4A58F', // Weathered Sage
          light: '#B8B9A6',
          muted: '#8D8E78',
        },
        ivory: {
          DEFAULT: '#E7E4D6', // Vintage Ivory (Text & light parchment)
          muted: '#D5D2C2',
          pure: '#F4F2E8',
        },
        brass: {
          DEFAULT: '#A99B79', // Muted Brass
          light: '#C4B795',
          dark: '#8E805E',
        },
        oxblood: {
          DEFAULT: '#743A36', // Oxblood (Red ledger ink & stamps)
          light: '#8D4844',
          dark: '#582A27',
          glow: 'rgba(116, 58, 54, 0.35)',
        },
        tobacco: '#1B1E19',
        // Backward-compatible tokens mapped to the period palette
        ink: '#181C19',
        panel: '#252B27',
        line: '#3B453E',
        muted: '#A4A58F',
        lime: '#A99B79', // Brass accent
      },
      fontFamily: {
        clarendon: [
          'Clarendon Condensed',
          'Clarendon Extra Condensed',
          'Clarendon XX Condensed',
          'Roman Wood Type JNL',
          'Besley',
          'Rockwell Condensed',
          'Rockwell Extra Bold',
          'Rockwell',
          'Rokkitt',
          'Ultra',
          'Georgia',
          'serif',
        ],
        display: ['var(--font-cinzel)', 'Cinzel', 'Playfair Display', 'Georgia', 'serif'],
        condensed: ['var(--font-oswald)', 'Oswald', 'Bebas Neue', 'Impact', 'sans-serif'],
        serif: ['var(--font-playfair)', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['var(--font-libre)', 'Libre Franklin', 'Inter', '-apple-system', 'sans-serif'],
        mono: ['var(--font-plex-mono)', 'IBM Plex Mono', 'Courier New', 'monospace'],
      },
      backgroundImage: {
        'paper-grain': "radial-gradient(circle at 50% 50%, rgba(231, 228, 214, 0.03) 0%, transparent 100%)",
        'brass-gradient': "linear-gradient(135deg, #A99B79 0%, #8E805E 50%, #C4B795 100%)",
        'oxblood-gradient': "linear-gradient(135deg, #743A36 0%, #582A27 100%)",
      },
      boxShadow: {
        'vintage': '0 8px 30px rgba(21, 24, 21, 0.45)',
        'stamp': 'inset 0 0 0 2px #743A36, 0 2px 8px rgba(116, 58, 54, 0.3)',
        'brass': '0 0 15px rgba(169, 155, 121, 0.25)',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};

export default config;
