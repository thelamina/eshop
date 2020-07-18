import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className='Navbar'>
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
          <NavLink to='/login'>Login</NavLink>
        </li>
        <li>
          <NavLink to='/profile'>Profile</NavLink>
        </li>
        <li>
          <NavLink
            to='/cart'
            style={{ background: "transparent", border: "none", width: "auto" }}
          >
            <img src='assets/cart1.png' alt='' width='40px' />
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
