import { Link } from 'react-router-dom';
import './Navbar.css';
import Logo from '../../assets/images/hasan-logo.png';
import { useState } from 'react';

const Navbar = () => {
  const [showMobileNav, setShowMobileNav] = useState(false);
  return (
    <>
      <nav className="navbar">
        <Link to="/">
          <img src={Logo} alt="" />
        </Link>

        <ul className="navbar_links laptop_screen">
          <li>
            <Link to={'/skills'}>skills</Link>
          </li>
          <li>
            <Link to={'/projects'}>projects</Link>
          </li>
          <li>
            <Link to={'/contact'}>contact</Link>
          </li>
        </ul>

        <ul className="navbar_links social_links laptop_screen">
          <li>
            <a target="__blank" href="https://www.linkedin.com/in/hasan-kryym/">
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </li>
          <li>
            <a target="__blank" href="https://github.com/hasanKryym">
              <i className="fa-brands fa-github"></i>
            </a>
          </li>
          <li>
            <a href="">
              <i className="fa-brands fa-instagram"></i>
            </a>
          </li>
        </ul>

        {/* MOBILE NAV LIST */}

        <div className="mobile_list_container">
          <button
            className="mobile-nav_bars"
            onClick={() => setShowMobileNav(!showMobileNav)}
          >
            <i className="fa-solid fa-bars"></i>
          </button>

          {showMobileNav && (
            <ul className="mobile-nav_links">
              <li>
                <Link to={'/skills'}>skills</Link>
              </li>
              <li>
                <Link to={'/projects'}>projects</Link>
              </li>
              <li>
                <Link to={'/contact'}>contact</Link>
              </li>
            </ul>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
