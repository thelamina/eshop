import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className='Navbar container'>
      <Link to='/' className='Navbar-Logo'>
        <img src='assets/logo.png' alt='Logo' />
      </Link>
      <ul className='Navbar-Links'>
        <li>
          <NavLink exact to='/'>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to='/shop'>Shop</NavLink>
        </li>
        <li>
          <NavLink to='/auth'>Accounts</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
