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
import { customTheme } from '../utils/FlowbiteThemesCustom';

export default function NavigationBar() {
  return (
    <Flowbite theme={{ theme: customTheme }}>
      <Navbar className="md:px-4 lg:px-[120px]">
        <NavbarBrand as={Link} to="/" className='md:mb-3'>
          <img src={LogoCQF} className="mr-3 h-6 sm:h-9" alt="CQF Logo" />
        </NavbarBrand>
        <NavbarToggle />
        <NavbarCollapse>
          <NavbarLink as={Link} to="/">
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
          <NavbarLink as={Link} to="/login">
            <Button color="login" pill={true}>
              <p className="font-bold text-base">Masuk</p>
            </Button>
          </NavbarLink>
        </NavbarCollapse>
      </Navbar>
    </Flowbite>
  );
}
