import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { logo } from "../../assets/index";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // For mobile menu toggle

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-gray-100   sticky top-0 z-50 text-gray-800 shadow-md bg-gradient-to-r from-blue-100 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <NavLink to="/" className="text-xl font-bold flex items-center">
              <img src={logo} alt="Logo" className="h-10 w-auto" />
            </NavLink>
          </div>

          <div className="hidden md:flex space-x-6 items-center">
            <NavLink
              to="/"
              style={({ isActive }) => ({
                color: isActive ? '#881214' : undefined,
              })}
              className="hover:text-blue-600 transition-colors"
            >
              Home
            </NavLink>

            <NavLink
              to="/services"
              style={({ isActive }) => ({
                color: isActive ? '#881214' : undefined,
              })}
              className="hover:text-blue-600 transition-colors"
            >
              Services
            </NavLink>

            {/* <NavLink
              to="/services/legal"
              style={({ isActive }) => ({
                color: isActive ? '#881214' : undefined,
              })}
              className="hover:text-blue-600 transition-colors"
            >
              Legal Services
            </NavLink> */}
            {/*<NavLink
              to="/services/tax"
              style={({ isActive }) => ({
                color: isActive ? '#881214' : undefined,
              })}
              className="hover:text-blue-600 transition-colors"
            >
              Taxation Services
            </NavLink> */}
           {/* <NavLink
              to="/services/financial-advisory"
              style={({ isActive }) => ({
                color: isActive ? '#881214' : undefined,
              })}
              className="hover:text-blue-600 transition-colors"
            >
              Business & Financial Services
            </NavLink> */}

            <NavLink
              to="/industry-expertise"
              style={({ isActive }) => ({
                color: isActive ? '#881214' : undefined,
              })}
              className="hover:text-blue-600 transition-colors"
            >
              Industry Expertise
            </NavLink>
            <NavLink
              to="/partners-and-affiliates"
              style={({ isActive }) => ({
                color: isActive ? '#881214' : undefined,
              })}
              className="hover:text-blue-600 transition-colors"
            >
              Partners And Affiliates
            </NavLink>
            <NavLink
              to="/contact"
              style={({ isActive }) => ({
                color: isActive ? '#881214' : undefined,
              })}
              className="hover:text-blue-600 transition-colors"
            >
              Contact
            </NavLink>
          </div>

          <div className="md:hidden flex items-center ">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="hover:text-blue-600 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden px-2 pt-2 pb-3 space-y-1 bg-gray-100 bg-gradient-to-r from-blue-100 to-blue-50">
          <NavLink
            to="/"
            style={({ isActive }) => ({
              color: isActive ? '#881214' : undefined,
            })}
            className="block text-gray-800 hover:bg-gray-200 px-3 py-2 rounded-md transition-colors"
            onClick={handleLinkClick}
          >
            Home
          </NavLink>

          <NavLink
            to="/services"
            style={({ isActive }) => ({
              color: isActive ? '#881214' : undefined,
            })}
            className="block text-gray-800 hover:bg-gray-200 px-3 py-2 rounded-md transition-colors"
            onClick={handleLinkClick}
          >
            Services
          </NavLink>
          {/* <NavLink
            to="/services/legal"
            style={({ isActive }) => ({
              color: isActive ? '#881214' : undefined,
            })}
            className="block text-gray-800 hover:bg-gray-200 px-3 py-2 rounded-md transition-colors"
            onClick={handleLinkClick}
          >
            Legal Services
          </NavLink> */}
          {/* <NavLink
            to="/services/tax"
            style={({ isActive }) => ({
              color: isActive ? '#881214' : undefined,
            })}
            className="block text-gray-800 hover:bg-gray-200 px-3 py-2 rounded-md transition-colors"
            onClick={handleLinkClick}
          >
            Taxation Services
          </NavLink> */}
          {/* <NavLink
            to="/services/financial-advisory"
            style={({ isActive }) => ({
              color: isActive ? '#881214' : undefined,
            })}
            className="block text-gray-800 hover:bg-gray-200 px-3 py-2 rounded-md transition-colors"
            onClick={handleLinkClick}
          >
            Business & Financial Services
          </NavLink> */}
          <NavLink
            to="/industry-expertise"
            style={({ isActive }) => ({
              color: isActive ? '#881214' : undefined,
            })}
            className="block text-gray-800 hover:bg-gray-200 px-3 py-2 rounded-md transition-colors"
            onClick={handleLinkClick}
          >
            Industry Expertise
          </NavLink>
          <NavLink
            to="/partners-and-affiliates"
            style={({ isActive }) => ({
              color: isActive ? '#881214' : undefined,
            })}
            className="block text-gray-800 hover:bg-gray-200 px-3 py-2 rounded-md transition-colors"
            onClick={handleLinkClick}
          >
            Partners And Affiliates
          </NavLink>
          <NavLink
            to="/contact"
            style={({ isActive }) => ({
              color: isActive ? '#881214' : undefined,
            })}
            className="block text-gray-800 hover:bg-gray-200 px-3 py-2 rounded-md transition-colors"
            onClick={handleLinkClick}
          >
            Contact
          </NavLink>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
