import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const navLinks = [
  {
    title: 'Visuals',
    link: '/visuals',
  },
  {
    title: 'Program',
    link: '/program',
  },
  {
    title: 'Chat-AI',
    link: '/chat',
  },
  {
    title: 'Contact Us',
    link: '/contact',
  },
  {
    title: 'Donate',
    link: '/donate',
  },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleMenu = () => {
    setOpen((prev) => !prev);
  };

  return (
    <div className="bg-black rounded-sm shadow-sm shadow-white sticky top-0 z-10">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link
              to="/"
              className="inline-block bg-transparent text-white py-2 px-4 rounded-lg shadow-lg transition duration-300 ease-in-out hover:bg-white hover:text-gray-900 hover:shadow-md"
            >
              Logo
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.link}
                  className="text-gray-300 transition-all duration-500 hover:bg-gray-600 hover:text-white px-3 py-2 rounded-md text-md font-medium"
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              type="button"
              onClick={handleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            >
              <span className="sr-only">Open Main Menu</span>
              {open === true ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>
      {open ? (
        <div className="md:hidden">
          <div className="ox-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                to={link.link}
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md
                text-base font-medium"
              >
                {link.title}
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Navbar;
