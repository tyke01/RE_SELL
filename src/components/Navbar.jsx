import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { MobileNavigtion } from "../data";
import { MdClose, MdOutlineMenu } from "react-icons/md";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="flex justify-between items-center bg-white px-4 py-2 shadow-md fixed top-0 w-full">
      <Link to="/" className="flex items-center gap-5">
        <img
          src="/phone-3.jpg"
          alt="Resell Marketplace Logo"
          className="w-10 h-10 rounded-full mr-2"
        />
        <h1 className="text-2xl font-bold text-teal-500">Resell Marketplace</h1>
      </Link>
      <nav className="hidden md:flex space-x-4">
        <NavLink to="/products" exact className="navbar">
          Buy
        </NavLink>
        <NavLink to="/sell" exact className="navbar">
          Sell
        </NavLink>
        <NavLink to="/categories" className="navbar">
          Categories
          <i className="fas fa-chevron-down ml-2"></i>
        </NavLink>
        <NavLink to="/about" className="navbar">
          About
        </NavLink>
        <NavLink to="/contact" className="navbar">
          Contact
        </NavLink>
      </nav>
      <div className="lg:hidden">
        <button
          onClick={toggleMenu}
          className="bg-green-500 px-3 py-1 rounded-lg text-white text-2xl"
        >
          <MdOutlineMenu />
        </button>
        {isOpen && (
          <div className="fixed flex flex-col items-center top-0 left-0 w-full h-screen bg-white p-10 shadow-md z-10">
            <ul className="flex flex-col gap-5 justify-start items-start h-full text-2xl font-bold w-full">
              {MobileNavigtion.map((item) => (
                <li
                  key={item.name}
                  className="hover:bg-green-300 w-full p-3 rounded-md bg-green-200"
                >
                  <NavLink
                    to="/buy"
                    className="text-green-500 font-semibold flex items-center gap-3"
                    onClick={toggleMenu}
                  >
                    <span>{item.icon}</span>
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
            <div
              className="text-3xl text-green-600 bg-green-200 w-fit rounded-md p-2 cursor-pointer"
              onClick={toggleMenu}
            >
              <MdClose />
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
