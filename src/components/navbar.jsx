import { Link } from "react-router-dom";
import { useState } from "react";
import { useContext } from "react";
import { themeToggler } from "../Context/ThemeToggler.jsx";



export default function Navbar({ logo }) {
  const [open, setOpen] = useState(false);
  const { theme, handleToggleTheme } = useContext(themeToggler);

  return (
    <header className={`bg-background shadow 1px solid #e0dbd3 py-4 mb-8 ${theme}`}>
      <nav className="flex justify-between items-center w-[92%] mx-auto relative">
        {/* Logo */}
        <div>
          <h3 className="w-16 cursor-pointer text-text text-3xl">LOGO</h3>
        </div>

        {/* Nav Links */}
        <ul
          className={`flex flex-col md:flex-row md:items-center md:gap-[4vw] gap-8
            absolute md:static left-0 w-full md:w-auto bg-white md:bg-transparent
            overflow-hidden transition-all duration-500 ease-in-out px-16
            ${open ? "max-h-96 py-6 top-16" : "max-h-0 top-16"}
            md:max-h-none md:py-0 md:flex`}
        >
          <li>
            <Link to="/" className="hover:text-gray-500 text-text">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-gray-500 text-text">
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-gray-500 text-text">
              Contact
            </Link>
          </li>
          <li>
            <Link to="/products" className="hover:text-gray-500 text-text">
              Products
            </Link>
          </li>
          <li>
            <Link to="/features" className="hover:text-gray-500 text-text">
              Features
            </Link>
          </li>
        </ul>

        {/* Buttons + Hamburger */}
        <div className="flex items-center gap-6">
          <button onClick={handleToggleTheme} className="bg-buttonbg px-5 py-2 rounded-full">
            <i onClick={() => setOpen(!open)}
            className={`fa-solid ${open ? "fa-moon" : "fa-sun"} text-2xl cursor-pointer`}></i>
          </button>
            <Link to="/cart">
          <button className="bg-buttonbg px-5 py-2 rounded-full ">
              <i className="fa-solid fa-cart-shopping"></i>
          </button>
            </Link>
          <button className="bg-primary text-buttontext px-5 py-2 rounded-full">
            <Link to="/login">Login</Link>
          </button>

          {/* Hamburger Icon → hidden on md+ */}
          <i
            onClick={() => setOpen(!open)}
            className={`fa-solid ${open ? "fa-xmark" : "fa-bars"} text-3xl cursor-pointer md:!hidden`}
          ></i>
        </div>
      </nav>
    </header>
  );
}
