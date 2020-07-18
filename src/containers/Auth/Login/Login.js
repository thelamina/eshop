import React, { useState } from "react";
import { Link } from "react-router-dom";
import {} from "../../../utils/Firebase";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  return (
    <div className='container Login'>
      <div className='Login-SignIn'>
        <div className='Login-bg'></div>
        <h2>Login Into Your Account</h2>
        <p>Let's shop</p>
        <form>
          <div className='form-group'>
            <input
              type='email'
              name='email'
              placeholder='Email Address'
              id='email'
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div className='form-group'>
            <input
              type='password'
              name='password'
              id='password'
              value={password}
              placeholder='Password'
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type='submit'>Login</button>
          <div className='Forgot-Password'>
            <div>
              <input type='checkbox' id='rememberMe' />
              <label htmlFor='rememberMe'>Rememeber Me</label>
            </div>
            <Link to='/resetPassword'>Forgot Password?</Link>
          </div>
        </form>
      </div>
      <div className='Login-SignUp'>
        <p>
          Don't have an account? <Link to='/register'>Sign up</Link>
        </p>
        <button>Sign in with Google</button>
      </div>
    </div>
  );
};

export default Login;
