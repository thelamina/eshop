import React, { useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import "./Navbar.css";
import { AuthContext } from "../../contexts/auth.context";

const Navbar = () => {
  console.log(process.env.REACT_APP_FIREBASE_API_KEY);
  const user = useContext(AuthContext);
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
        {user ? (
          <li>
            <NavLink to='/Profile'>Profile</NavLink>
          </li>
        ) : (
          <li>
            <NavLink to='/login'>Login</NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
