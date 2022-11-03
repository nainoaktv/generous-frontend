import React from 'react';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as BsIcons from "react-icons/bs";

// TODO update Contact and Support data to another route if needed

export const NavbarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Profile',
    path: '/profile',
    icon: <BsIcons.BsFillPersonFill />,
    cName: 'nav-text'
  },
  {
    title: 'About',
    path: '/about',
    icon: <BsIcons.BsInfoSquareFill />,
    cName: 'nav-text'
  },
  {
    title: 'Contact',
    path: '/contact',
    icon: <AiIcons.AiFillMail />,
    cName: 'nav-text'
  },
  {
    title: 'Support',
    path: '/support',
    icon: <FaIcons.FaTicketAlt />,
    cName: 'nav-text'
  },
]