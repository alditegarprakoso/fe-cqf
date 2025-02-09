import type { CustomFlowbiteTheme } from 'flowbite-react';
import {
  Flowbite,
  Button,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from 'flowbite-react';
import { Link } from 'react-router-dom';
import LogoCQF from '../images/logo/logo.png';
import { Search } from 'lucide-react';

const customTheme: CustomFlowbiteTheme = {
  navbar: {
    collapse: {
      list: 'mt-4 flex flex-col md:items-center md:mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium',
    },
  },
};

export default function NavigationBar() {
  return (
    <Flowbite theme={{ theme: customTheme }}>
      <Navbar className="lg:px-[120px]">
        <NavbarBrand as={Link} href="https://flowbite-react.com">
          <img src={LogoCQF} className="mr-3 h-6 sm:h-9" alt="CQF Logo" />
        </NavbarBrand>
        <NavbarToggle />
        <NavbarCollapse>
          <NavbarLink as={Link} to="/" active>
            <p className="text-base">Program</p>
          </NavbarLink>
          <NavbarLink as={Link} to="/">
            <p className="text-base">Kajian</p>
          </NavbarLink>
          <NavbarLink as={Link} to="/">
            <p className="text-base">Donasi</p>
          </NavbarLink>
          <NavbarLink as={Link} to="/">
            <p className="text-base">Kemitraan</p>
          </NavbarLink>
          <NavbarLink as={Link} to="/">
            <p className="text-base">Update</p>
          </NavbarLink>
          <NavbarLink as={Link} to="/">
            <p className="text-base">Kontak</p>
          </NavbarLink>
          <NavbarLink as={Link} to="/">
            <Search />
          </NavbarLink>
          <NavbarLink as={Link} to="/">
            <Button>Masuk</Button>
          </NavbarLink>
        </NavbarCollapse>
      </Navbar>
    </Flowbite>
  );
}
