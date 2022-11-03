import React, { useState } from 'react';
// import { NavLink, Link } from 'react-router-dom';
import { Link } from 'react-router-dom';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { IconContext } from "react-icons";
import { NavbarData } from './NavbarData';
import './Navbar.css';

const Navbar = (props) => {

  const [sidebar, setSidebar] = useState(false);

  const showSideBar = () => setSidebar(!sidebar);

  return (
    <div>

      <IconContext.Provider value={{ className: 'openMenu' }} >
        <div className='navbar'>
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSideBar} />
          </Link>
        </div>
      </IconContext.Provider>

      <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
        <ul className='nav-menu-items' onClick={showSideBar}>
          <li className='navbar-toggle'>
            <IconContext.Provider value={{ className: 'closeMenu' }} >
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose id='closeMenu' />
              </Link>
            </IconContext.Provider>
          </li>
          <IconContext.Provider value={{ color: '#DAA520' }} >
            {NavbarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              )
            })}
          </IconContext.Provider>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
