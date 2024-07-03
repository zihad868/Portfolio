import { NavLink } from "react-router-dom";

const Navbar = () => {
  const activeNavLink = ({ isActive }) => (isActive ? "text-primary" : "");

  const navLinks = (
    <>
      <NavLink to="/" className={activeNavLink}>
        Home
      </NavLink>
      <NavLink to="/about" className={activeNavLink}>
        About
      </NavLink>
      <NavLink to="/skill" className={activeNavLink}>
        Skill
      </NavLink>
      <NavLink to="/contact" className={activeNavLink}>
        Contact me
      </NavLink>
    </>
  );

  return (
    <div>
      <div className="navbar w-full fixed z-30">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost md:hidden lg:hidden"
            >
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
              {navLinks}
            </ul>
          </div>
          <a className="md:text-xl lg:text-2xl">Zihad</a>
        </div>

        <div className="navbar-end hidden md:flex lg:flex">
          <ul className="menu menu-horizontal px-1 md:text-xl lg:text-xl space-x-4 font-bold">
            {navLinks}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
