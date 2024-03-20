import { NavLink } from "react-router-dom";

import { logo } from "../assets/images";

const Navbar = () => {
  return (
    <header className='header'>
      <NavLink to='/My-Portofolio'>
        <p className='text-black text-[18px] font-medium cursor-pointer flex '>
          <span className='sm:block hidden'>Muhammad</span>
          &nbsp; Reza &nbsp;
          <span className='sm:block hidden'>Kurniawan</span>
        </p>
      </NavLink>
      <nav className='flex text-lg gap-7 font-medium'>
        <NavLink
          to='/My-Portofolio/about'
          className={({ isActive }) =>
            isActive ? "text-blue-600" : "text-black"
          }
        >
          About
        </NavLink>
        <NavLink
          to='/My-Portofolio/projects'
          className={({ isActive }) =>
            isActive ? "text-blue-600" : "text-black"
          }
        >
          Projects
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
