import { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // For mobile menu toggle
  const [dropdownOpen, setDropdownOpen] = useState(false); // For Services dropdown

  // Close mobile menu when a link is clicked
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-primary-color sticky top-0 z-50 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo / Brand */}
          <div className="flex items-center">
            <NavLink to="/" className="text-xl font-bold">Abasin Consult</NavLink>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            <NavLink to="/" className="hover:text-accent-color" activeStyle={{ accentColor: 'var(--accent-color)' }}>Home</NavLink>
            <NavLink to="/about" className="hover:text-accent-color" activeStyle={{ accentColor: 'var(--accent-color)' }}>About Us</NavLink>

            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center justify-center hover:text-accent-color"
              >
                Services
                <svg
                  className="ml-1 h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {dropdownOpen && (
                <div
                  className="dropdown-enter absolute z-10 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <NavLink
                    to="/services/legal"
                    className="block px-4 py-2 text-gray-700 hover:bg-accent-color"
                    activeStyle={{ accentColor: 'var(--accent-color)' }}
                  >
                    Legal Services
                  </NavLink>
                  <NavLink
                    to="/services/tax"
                    className="block px-4 py-2 text-gray-700 hover:bg-accent-color"
                    activeStyle={{ accentColor: 'var(--accent-color)' }}
                  >
                    Taxation, Audit and Accounting Services
                  </NavLink>
                  <NavLink
                    to="/services/financial-advisory"
                    className="block px-4 py-2 text-gray-700 hover:bg-accent-color"
                    activeStyle={{ accentColor: 'var(--accent-color)' }}
                  >
                    Business & Financial Advisory Services
                  </NavLink>
                </div>
              )}
            </div>

            <NavLink to="/industry-expertise" className="hover:text-accent-color" activeStyle={{ accentColor: 'var(--accent-color)' }}>
              Industry Expertise
            </NavLink>
            <NavLink to="/our-people" className="hover:text-accent-color" activeStyle={{ accentColor: 'var(--accent-color)' }}>
              Our People
            </NavLink>
            <NavLink to="/partners-and-affiliates" className="hover:text-accent-color" activeStyle={{ accentColor: 'var(--accent-color)' }}>
              Partners And Affiliates
            </NavLink>
            <NavLink to="/contact" className="hover:text-accent-color" activeStyle={{ accentColor: 'var(--accent-color)' }}>
              Contact Us
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="hover:text-accent-color focus:outline-none"
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

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-2 pt-2 pb-3 space-y-1">
          <NavLink
            to="/"
            className="block text-white hover:bg-accent-color px-3 py-2 rounded-md"
            activeStyle={{ accentColor: 'var(--accent-color)' }}
            onClick={handleLinkClick}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className="block text-white hover:bg-accent-color px-3 py-2 rounded-md"
            activeStyle={{ accentColor: 'var(--accent-color)' }}
            onClick={handleLinkClick}
          >
            About Us
          </NavLink>
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="flex items-center gap-2 w-full text-left text-white hover:bg-accent-color px-3 py-2 rounded-md"
          >
            Services
            <svg
              className="ml-1 h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          {dropdownOpen && (
            <div className="pl-4 space-y-1">
              <NavLink
                to="/services/legal"
                className="block text-white hover:bg-accent-color px-3 py-2 rounded-md"
                activeStyle={{ accentColor: 'var(--accent-color)' }}
                onClick={handleLinkClick}
              >
                Legal Services
              </NavLink>
              <NavLink
                to="/services/tax"
                className="block text-white hover:bg-accent-color px-3 py-2 rounded-md"
                activeStyle={{ accentColor: 'var(--accent-color)' }}
                onClick={handleLinkClick}
              >
                Taxation, Audit and Accounting Services
              </NavLink>
              <NavLink
                to="/services/financial-advisory"
                className="block text-white hover:bg-accent-color px-3 py-2 rounded-md"
                activeStyle={{ accentColor: 'var(--accent-color)' }}
                onClick={handleLinkClick}
              >
                Business & Financial Advisory Services
              </NavLink>
            </div>
          )}

          <NavLink
            to="/industry-expertise"
            className="block text-white hover:bg-accent-color px-3 py-2 rounded-md"
            activeStyle={{ accentColor: 'var(--accent-color)' }}
            onClick={handleLinkClick}
          >
            Industry Expertise
          </NavLink>
          <NavLink
            to="/our-people"
            className="block text-white hover:bg-accent-color px-3 py-2 rounded-md"
            activeStyle={{ accentColor: 'var(--accent-color)' }}
            onClick={handleLinkClick}
          >
            Our People
          </NavLink>
          <NavLink
            to="/partners-and-affiliates"
            className="block text-white hover:bg-accent-color px-3 py-2 rounded-md"
            activeStyle={{ accentColor: 'var(--accent-color)' }}
            onClick={handleLinkClick}
          >
            Partners And Affiliates
          </NavLink>
          <NavLink
            to="/contact"
            className="block text-white hover:bg-accent-color px-3 py-2 rounded-md"
            activeStyle={{ accentColor: 'var(--accent-color)' }}
            onClick={handleLinkClick}
          >
            Contact Us
          </NavLink>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
