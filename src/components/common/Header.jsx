import Logo from "/public/BrandLogo.png";
import { NavLink, useLocation } from "react-router-dom";
import { FaAngleDoubleDown } from "react-icons/fa";

const Header = () => {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;
  return (
    <nav className="w-full flex items-center justify-center mt-4">
      <div className="navlinks w-1/3 p-3 rounded-3xl">
        <ul className=" flex gap-2 justify-evenly">
          <li className="relative">
            {isActive("/") && (
              <span className="absolute top-2 -left-5 h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
            )}

            <NavLink to="/">Home</NavLink>
          </li>
          <li className="relative">
            {isActive("/shop") && (
              <span className="absolute top-2 -left-5 h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
            )}
            <NavLink to="/shop" className="flex items-center gap-2">
              Shop By <FaAngleDoubleDown />
            </NavLink>
          </li>
          <li className="relative">
            {isActive("/aboutus") && (
              <span className="absolute top-2 -left-5 h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
            )}
            <NavLink to="/aboutus">About Us</NavLink>
          </li>
        </ul>
      </div>
      <div className="Logo w-1/3 flex justify-center">
        <img src={Logo} alt="Logo goes here" className="w-[4rem] sm:w-[7rem]" />
      </div>
      <div className="navlinks w-1/3 p-3 rounded-3xl">
        <ul className="flex gap-2 justify-evenly">
          <li className="relative">
            {isActive("/login") && (
              <span className="absolute top-2 -left-5 h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
            )}
            <NavLink to="/login">Login</NavLink>
          </li>
          <li className="relative">
            {isActive("/signup") && (
              <span className="absolute top-2 -left-5 h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
            )}
            <NavLink to="/signup">Sign Up</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
