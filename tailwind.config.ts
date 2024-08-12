import type { Config } from 'tailwindcss'

type AddComponentsType = (
  components: Record<string, Record<string, any>>,
  options?: {
    respectPrefix?: boolean;
    respectImportant?: boolean;
  }
) => void

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  safelist: [
    'animate-spin',
    'h-5',
    'w-5',
    'h-10',
    'w-10',
    'h-12',
    'w-12',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      backgroundPosition: {
        'center-center': '50% 50%',
      },
      // content: {
      //   'link': 'url("/next.svg")',
      // },
    },
  },
  plugins: [
    function({ addComponents }: { addComponents: AddComponentsType}) {
      addComponents({
        '.numbered-section-white': {
          '@apply relative leading-none text-[150px] text-[#f1f1f1] opacity-70 float-right': {},
          '&::before': {
            content: '""',
            '@apply absolute w-[120px] border-t bottom-5 left-[-130px]': {},
          },
          '&::after': {
            content: '""',
            '@apply absolute w-3 h-3 left-[-10px] bottom-[14px] bg-[#fff] rounded-full': {},
          },
        },
        '.numbered-section-black': {
          '@apply relative leading-none text-[150px] text-black opacity-70 float-right': {},
          '&::before': {
            content: '""',
            '@apply absolute w-[120px] border-t border-black bottom-5 left-[-130px]': {},
          },
          '&::after': {
            content: '""',
            '@apply absolute w-3 h-3 left-[-10px] bottom-[14px] bg-black rounded-full': {},
          },
        },
      })
    },
  ],
}
export default config
