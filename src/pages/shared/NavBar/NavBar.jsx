import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  const navContent = (
    <>
      {" "}
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/colleges">Colleges</NavLink>
      </li>
      <li>
        <a>Admission</a>
      </li>
      <li>
        <a>My College</a>
      </li>
    </>
  );

  const [showShadow, setShowShadow] = useState(false);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    setShowShadow(scrollPosition > 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`navbar bg-base-100 ${
        showShadow ? "shadow-md shadow-transition" : ""
      } fixed z-10 npm top-0 left-0 w-full`}
    >
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navContent}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          Collegio Vistora
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navContent}</ul>
      </div>

      <div className="form-control navbar-end">
        <input
          type="text"
          placeholder="Search"
          className="input input-bordered w-24 md:w-auto"
        />
      </div>
    </div>
  );
};

export default NavBar;
