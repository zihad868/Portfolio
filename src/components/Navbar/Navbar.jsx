import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navLink = (
    <div className="space-x-4">
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/about'>About</NavLink>
      <NavLink to='/skill'>Skill</NavLink>
      <NavLink to='/contact'>Contact me</NavLink>
    </div>
  );

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost md:hidden lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {navLink}
          </ul>
        </div>
        <a className="md:text-xl lg:text-2xl">Zihad</a>
      </div>

      <div className="navbar-end hidden md:flex lg:flex">
      <ul className="menu menu-horizontal px-1 md:text-xl lg:text-xl">
          {navLink}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
