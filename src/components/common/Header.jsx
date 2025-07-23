import Logo from "/BrandLogo.png";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { FaAngleDoubleDown } from "react-icons/fa";
import { motion } from "framer-motion"; // FIX: was incorrectly imported before
import { useEffect, useState } from "react";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check authentication status on mount
  useEffect(() => {
    const auth = localStorage.getItem("isAuthenticated") === "true";
    setIsLoggedIn(auth);
  }, [location.pathname]);

  const logoutHandler = () => {
    localStorage.removeItem("isAuthenticated");
    setIsLoggedIn(false);
    navigate("/login");
  };

  const isActive = (path) => location.pathname === path;

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="w-full flex items-center justify-center mt-4 z-50"
    >
      <nav className="w-full flex items-center justify-center mt-2">
        {/* Left Links */}
        <div className="navlinks w-1/3 p-3 rounded-3xl">
          <ul className="flex gap-2 justify-evenly text-sm sm:text-md">
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

        {/* Logo */}
        <div className="Logo w-1/3 flex justify-center">
          <img
            src={Logo}
            alt="Logo"
            className="w-[4rem] sm:w-[7rem]"
          />
        </div>

        {/* Right Links */}
        <div className="navlinks w-1/3 p-3 rounded-3xl">
          <ul className="flex gap-2 justify-evenly text-sm sm:text-md">
            {!isLoggedIn ? (
              <>
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
              </>
            ) : (
              <li>
                <button
                  onClick={logoutHandler}
                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded-lg text-sm transition"
                >
                  Logout
                </button>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </motion.nav>
  );
};

export default Header;
