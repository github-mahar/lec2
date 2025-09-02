import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar({ logo }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white shadow">
      <nav className="flex justify-between items-center w-[92%] mx-auto relative">
        {/* Logo */}
        <div>
          <a href="/"><img className="w-16 cursor-pointer" src={logo} alt="logo" /></a>
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
            <Link to="/" className="hover:text-gray-500">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-gray-500">
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-gray-500">
              Contact
            </Link>
          </li>
          <li>
            <Link to="/products" className="hover:text-gray-500">
              Products
            </Link>
          </li>
          <li>
            <Link to="/features" className="hover:text-gray-500">
              Features
            </Link>
          </li>
        </ul>

        {/* Buttons + Hamburger */}
        <div className="flex items-center gap-6">
            <Link to="/cart">
          <button className="bg-gray-200 px-5 py-2 rounded-full hover:bg-gray-300">
              <i className="fa-solid fa-cart-shopping"></i>
          </button>
            </Link>
          <button className="bg-[#ac61ee] text-white px-5 py-2 rounded-full hover:bg-[#87acec]">
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
