import React, { useEffect, useState } from "react";
import Logo from "/BrandLogo.png";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import {
  FaAngleDoubleDown,
  FaBars,
  FaTimes,
  FaShoppingCart,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import products from "../../Data/Products";
import { useCart } from "../../context/CartContext";
import { toast } from "react-toastify";

const categories = [...new Set(products.map((p) => p.category))];

const dropdownVariants = {
  hidden: { opacity: 0, scaleY: 0, transformOrigin: "top" },
  visible: {
    opacity: 1,
    scaleY: 1,
    transformOrigin: "top",
    transition: { duration: 0.2 },
  },
};

const mobileMenuVariants = {
  closed: { height: 0, opacity: 0, transition: { duration: 0.3 } },
  open: { height: "auto", opacity: 1, transition: { duration: 0.3 } },
};

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { cartItems } = useCart();

  // Scroll-aware header state
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Calculate total quantity in cart (sum of quantities)
  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  // Check auth on mount and path change; close menus on route change
  useEffect(() => {
    const auth = localStorage.getItem("isAuthenticated") === "true";
    setIsLoggedIn(auth);
    setDropdownOpen(false);
    setMobileNavOpen(false);
    setMobileDropdownOpen(false);
   
  }, [location.pathname]);

  // Scroll event to show/hide header based on scroll direction
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY <= 0) {
        setShowHeader(true);
      } else if (currentScrollY > lastScrollY) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const logoutHandler = () => {
    localStorage.removeItem("isAuthenticated");
    setIsLoggedIn(false);
    toast.success("Logged out successfully");
    navigate("/login");
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: showHeader ? 0 : -100, opacity: showHeader ? 1 : 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className=" w-full flex flex-col items-center z-50 sticky top-0"
    >
      <div className="header w-[90%] container mx-auto flex items-center justify-around px-2 sm:px-8 py-2 fixed top-5">
        {/* Left Links (Desktop) */}
        <div className="hidden md:flex items-center gap-6 text-sm sm:text-md">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `relative hover:text-rose-600 transition ${
                isActive ? "font-semibold text-rose-600" : ""
              }`
            }
            end
          >
            {({ isActive }) => (
              <>
                {isActive && (
                  <span className="absolute -left-5 top-2 h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                )}
                Home
              </>
            )}
          </NavLink>

          {/* Shop By Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button
              aria-haspopup="true"
              aria-expanded={dropdownOpen}
              onFocus={() => setDropdownOpen(true)}
              onBlur={() => setDropdownOpen(false)}
              className={`flex items-center gap-1 py-2 px-3 rounded hover:bg-rose-50 transition ${
                dropdownOpen ? "text-rose-600 font-semibold" : ""
              }`}
            >
              Shop By{" "}
              <FaAngleDoubleDown
                className={`inline-block transition-transform ${
                  dropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            <AnimatePresence>
              {dropdownOpen && (
                <motion.div
                  variants={dropdownVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  className="absolute left-0 mt-1 w-40 bg-white rounded shadow-lg z-10"
                  onMouseDown={(e) => e.preventDefault()} // prevent blur on click
                >
                  {categories.map((cat) => (
                    <NavLink
                      key={cat}
                      to={`/products#${cat.replace(/\s+/g, "")}`}
                      className={({ isActive }) =>
                        `block px-4 py-2 text-gray-700 hover:bg-rose-100 transition ${
                          isActive ? "bg-rose-100 font-semibold" : ""
                        }`
                      }
                      onClick={() => setDropdownOpen(false)}
                    >
                      {cat}
                    </NavLink>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <NavLink
            to="/aboutus"
            className={({ isActive }) =>
              `relative hover:text-rose-600 transition ${
                isActive ? "font-semibold text-rose-600" : ""
              }`
            }
          >
            {({ isActive }) => (
              <>
                {isActive && (
                  <span className="absolute -left-5 top-2 h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                )}
                About Us
              </>
            )}
          </NavLink>

          <NavLink
            to="/products"
            className={({ isActive }) =>
              `ml-2 relative hover:text-rose-600 transition ${
                isActive ? "font-semibold text-rose-600" : ""
              }`
            }
          >
            {({ isActive }) => (
              <>
                {isActive && (
                  <span className="absolute -left-5 top-2 h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                )}
                Products
              </>
            )}
          </NavLink>
        </div>

        {/* Logo Center */}
        <div className="flex justify-center flex-1 ">
          <NavLink to="/" className="inline-block">
            <img src={Logo} alt="Logo" className="w-16 sm:w-28" />
          </NavLink>
        </div>

        {/* Right Links (Desktop) */}
        <div className="hidden md:flex items-center gap-15 text-sm sm:text-md">
          {isLoggedIn ? (
            <>
              <NavLink
                to="/account"
                className={({ isActive }) =>
                  `relative hover:text-rose-600 transition ${
                    isActive ? "font-semibold text-rose-600" : ""
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {isActive && (
                      <span className="absolute -left-5 top-2 h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                    )}
                    My Account
                  </>
                )}
              </NavLink>

              <NavLink
                to="/cart"
                className={({ isActive }) =>
                  `flex items-center gap-1 relative hover:text-rose-600 transition ${
                    isActive ? "font-semibold text-rose-600" : ""
                  }`
                }
              >
                <FaShoppingCart size={20} />
                {totalQuantity > 0 && (
                  <span className="absolute -top-1 -right-3 bg-red-500 text-white text-xs font-bold rounded-full px-1.5">
                    {totalQuantity}
                  </span>
                )}
                Cart
              </NavLink>
            </>
          ) : (
            <>
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  `relative hover:text-rose-600 transition ${
                    isActive ? "font-semibold text-rose-600" : ""
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {isActive && (
                      <span className="absolute -left-5 top-2 h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                    )}
                    Login
                  </>
                )}
              </NavLink>
              <NavLink
                to="/signup"
                className={({ isActive }) =>
                  `relative hover:text-rose-600 transition ${
                    isActive ? "font-semibold text-rose-600" : ""
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {isActive && (
                      <span className="absolute -left-5 top-2 h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                    )}
                    Sign Up
                  </>
                )}
              </NavLink>
            </>
          )}
          {isLoggedIn && (
            <button
              onClick={logoutHandler}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded-lg text-sm transition"
            >
              Logout
            </button>
          )}

        
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-2xl text-rose-600"
          aria-label="Toggle menu"
          onClick={() => setMobileNavOpen((v) => !v)}
          type="button"
        >
          {mobileNavOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileNavOpen && (
          <motion.div
            key="mobileMenu"
            variants={mobileMenuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="md:hidden w-full bg-white shadow-lg overflow-hidden z-50"
          >
            <ul className="flex flex-col divide-y divide-gray-200 text-base font-medium px-4">
              <li>
                <NavLink
                  to="/"
                  onClick={() => setMobileNavOpen(false)}
                  className={({ isActive }) =>
                    `block py-3 px-2 ${
                      isActive ? "text-rose-600 font-semibold" : "text-gray-700"
                    } hover:bg-rose-100 rounded`
                  }
                  end
                >
                  Home
                </NavLink>
              </li>

              {/* Mobile Shop By with collapsible submenu */}
              <li>
                <button
                  className="w-full py-3 px-2 flex justify-between items-center text-gray-700 hover:bg-rose-100 rounded"
                  onClick={() => setMobileDropdownOpen((v) => !v)}
                  aria-expanded={mobileDropdownOpen}
                  aria-controls="mobileShopByDropdown"
                  type="button"
                >
                  Shop By{" "}
                  <FaAngleDoubleDown
                    className={`transition-transform ${
                      mobileDropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {mobileDropdownOpen && (
                    <motion.ul
                      id="mobileShopByDropdown"
                      role="menu"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="pl-6 bg-rose-50 overflow-hidden"
                    >
                      {categories.map((cat) => (
                        <li key={cat}>
                          <NavLink
                            to={`/products#${cat.replace(/\s+/g, "")}`}
                            className={({ isActive }) =>
                              `block py-2 hover:text-rose-600 ${
                                isActive
                                  ? "font-semibold text-rose-600"
                                  : "text-gray-700"
                              }`
                            }
                            onClick={() => {
                              setMobileNavOpen(false);
                              setMobileDropdownOpen(false);
                            }}
                          >
                            {cat}
                          </NavLink>
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </li>

              <li>
                <NavLink
                  to="/aboutus"
                  onClick={() => setMobileNavOpen(false)}
                  className={({ isActive }) =>
                    `block py-3 px-2 ${
                      isActive ? "text-rose-600 font-semibold" : "text-gray-700"
                    } hover:bg-rose-100 rounded`
                  }
                >
                  About Us
                </NavLink>
              </li>

              {isLoggedIn && (
                <>
                  <li>
                    <NavLink
                      to="/account"
                      onClick={() => setMobileNavOpen(false)}
                      className={({ isActive }) =>
                        `block py-3 px-2 ${
                          isActive
                            ? "text-rose-600 font-semibold"
                            : "text-gray-700"
                        } hover:bg-rose-100 rounded`
                      }
                    >
                      My Account
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/cart"
                      onClick={() => setMobileNavOpen(false)}
                      className={({ isActive }) =>
                        `block py-3 px-2 flex items-center gap-1 ${
                          isActive
                            ? "text-rose-600 font-semibold"
                            : "text-gray-700"
                        } hover:bg-rose-100 rounded`
                      }
                    >
                      <FaShoppingCart />
                      Cart
                      {totalQuantity > 0 && (
                        <span className="ml-1 inline-block bg-red-500 text-white text-xs font-bold rounded-full px-1.5">
                          {totalQuantity}
                        </span>
                      )}
                    </NavLink>
                  </li>
                </>
              )}

              {!isLoggedIn ? (
                <>
                  <li>
                    <NavLink
                      to="/login"
                      onClick={() => setMobileNavOpen(false)}
                      className={({ isActive }) =>
                        `block py-3 px-2 ${
                          isActive
                            ? "text-rose-600 font-semibold"
                            : "text-gray-700"
                        } hover:bg-rose-100 rounded`
                      }
                    >
                      Login
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/signup"
                      onClick={() => setMobileNavOpen(false)}
                      className={({ isActive }) =>
                        `block py-3 px-2 ${
                          isActive
                            ? "text-rose-600 font-semibold"
                            : "text-gray-700"
                        } hover:bg-rose-100 rounded`
                      }
                    >
                      Sign Up
                    </NavLink>
                  </li>
                </>
              ) : (
                <li>
                  <button
                    onClick={() => {
                      logoutHandler();
                      setMobileNavOpen(false);
                    }}
                    className="w-full bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg text-center"
                    type="button"
                  >
                    Logout
                  </button>
                </li>
              )}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
