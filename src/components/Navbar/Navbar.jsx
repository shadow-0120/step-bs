import React, { useState, useEffect } from 'react';
import './navbar.css';
import Logo from '../../assets/logo.png';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  const closeAllMenus = () => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  return (
    <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-logo">
        <img src={Logo} alt="Company Logo" />
      </div>

      <div 
        className={`navbar-hamburger ${mobileMenuOpen ? 'open' : ''}`}
        onClick={toggleMobileMenu}
        aria-label="Toggle menu"
        aria-expanded={mobileMenuOpen}
      >
        <div className="line-1"></div>
        <div className="line-2"></div>
        <div className="line-3"></div>
      </div>

      <div className={`navbar-content ${mobileMenuOpen ? 'open' : ''}`}>
        <ul className="navbar-links">
          {[
            { label: 'Home', href: '#' },
            { label: 'About', href: '#about' },
            { label: 'Partners', href: '#partners' },
            { 
              label: 'Courses', 
              href: '#courses',
            
              dropdown: [
                { label: 'Web Development', href: '#courses' },
                { label: 'Data Science', href: '#courses' },
                { label: 'Machine Learning', href: '#courses' },
                { label: 'Mobile Development', href: '#courses' }
              ]
            },
            { label: 'Contact Us', href: '#contact' }
          ].map((item, index) => (
            <li 
              key={index} 
              className={item.dropdown ? 'dropdown' : ''}
              onClick={() => item.dropdown && toggleDropdown(index)}
            >
              <a 
                href={item.href} 
                onClick={(e) => {
                  if (item.dropdown) {
                    e.preventDefault();
                  } else {
                    closeAllMenus();
                  }
                }}
                aria-haspopup={item.dropdown ? 'true' : undefined}
                aria-expanded={item.dropdown && activeDropdown === index ? 'true' : undefined}
              >
                {item.label}
                {item.dropdown && <i className="fa-solid fa-angle-down"></i>}
              </a>
              
              {item.dropdown && (
                <ul 
                  className={`dropdown-menu ${activeDropdown === index ? 'active' : ''}`}
                  onClick={(e) => e.stopPropagation()}
                >
                  {item.dropdown.map((subItem, subIndex) => (
                    <li key={subIndex}>
                      <a href={subItem.href} onClick={closeAllMenus}>{subItem.label}</a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        <div className="navbar-buttons">
          <a 
            href="#" 
            className="btn btn-primary"
            onClick={closeAllMenus}
          >
            Get Started
          </a>
        </div>
      </div>
    </nav>
  );
}