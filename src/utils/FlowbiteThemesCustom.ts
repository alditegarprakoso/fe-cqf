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
      btnCategory:
        'bg-white text-black-cqf border min-w-[200px] hover:bg-[rgba(56,158,217,0.06)] hover:text-blue-cqf hover:border-blue-cqf',
      btnCategoryActive:
        'bg-[rgba(56,158,217,0.06)] min-w-[200px] text-blue-cqf border-blue-cqf border hover:bg-blue-cqf hover:text-white',
      btnRegister:
        'bg-white text-blue-cqf px-8 max-w-[250px] border border-blue-cqf hover:bg-blue-cqf hover:text-white',
      btnWA: 'bg-[#00C062] min-w[180px] h-[40px] text-white',
      btnBlue: 'bg-blue-cqf text-white shadow-lg max-w-max',
    },
  },
  progress: {
    color: {
      progressCqf: 'bg-green-cqf',
    },
  },
};
