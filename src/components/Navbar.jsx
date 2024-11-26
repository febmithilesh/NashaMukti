import React, { useState } from "react";
import { Link } from "react-scroll";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const toggleMenu = () => setMenu((prev) => !prev);
  const closeMenu = () => setMenu(false);
  const openForm = () => {
    setShowForm(true);
    closeMenu(); // Ensure the menu is closed when the form opens
  };
  const closeForm = () => setShowForm(false);

  return (
    <header className="fixed w-full z-10 bg-white text-gray-500 shadow-lg">
      {/* Navbar Container */}
      <div className="flex items-center justify-between py-4 px-5 md:px-16">
        {/* Logo */}
        <Link
          to="home"
          spy={true}
          smooth={true}
          duration={500}
          className="cursor-pointer hover: text-primary transition duration-300 ease-in-out">
            <img src="/img/logo.png" className="h-20" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
  {["home", "about", "services", "blog", "contact"].map((item) => (
    <Link
      key={item}
      to={item} // Ensure this matches the ID of the target section
      spy={true}
      smooth={true}
      duration={500}
      className="text-xl font-semibold cursor-pointer hover:text-hoverColor transition"
    >
      {item.charAt(0).toUpperCase() + item.slice(1)}
    </Link>
  ))}
</nav>


        {/* Desktop Call Button */}
        <div className="hidden lg:block">
          <a
            href="tel:+1234567890" // Replace with your phone number
            className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-hoverColor transition duration-300"
          >
            Call
          </a>
        </div>

        {/* Mobile Menu Icon */}
        <button
          onClick={toggleMenu}
          aria-label={menu ? "Close menu" : "Open menu"}
          className="lg:hidden"
        >
          {menu ? <AiOutlineClose size={28} /> : <AiOutlineMenu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`absolute bg-backgroundColor text-white w-full top-16 left-0 transition-transform duration-300 ${
          menu ? "translate-x-0" : "-translate-x-full"
        } lg:hidden`}
        aria-hidden={!menu}
      >
        <nav className="flex flex-col items-center space-y-6 py-8 text-lg">
          {["home", "about", "services", "blog", "contact"].map((item) => (
            <Link
              key={item}
              to={item}
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-hoverColor transition"
              onClick={closeMenu}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </Link>
          ))}

          {/* Mobile Call Button */}
          <a
            href="tel:+1234567890" // Replace with your phone number
            className="bg-brightColor text-white px-4 py-2 rounded-md hover:bg-hoverColor transition duration-300"
          >
            Call
          </a>
        </nav>
      </div>

      {/* Contact us Modal */}
      {showForm && <Contact us closeForm={closeForm} />}
    </header>
  );
};

export default Navbar;





























