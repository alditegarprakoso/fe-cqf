import type { CustomFlowbiteTheme } from 'flowbite-react';

export const customTheme: CustomFlowbiteTheme = {
  navbar: {
    collapse: {
      list: 'mt-4 flex flex-col md:items-center md:mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium',
    },
  },
  button: {
    color: {
      login:
        'bg-white text-blue-cqf border-blue-cqf border px-8 hover:bg-blue-cqf hover:text-white',
      btnHero: 'bg-blue-cqf text-white px-4 py-2 shadow-lg',
    }
  },
};
