import React, { useState } from "react";
import { Link } from "react-router-dom";
import {} from "../../../utils/Firebase";
import "./Register.css";

const Register = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  return (
    <div className='container Register'>
      <div className='Register-SignIn'>
        <div className='Register-bg'></div>
        <h2>Register An Account</h2>
        <p>Let's shop</p>
        <form>
          <div className='form-group'>
            <input
              type='text'
              name='username'
              placeholder='Username'
              id='usernmae'
              onChange={(e) => setUsername(e.target.value)}
              value={username}
            />
          </div>
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
          <div className='form-group'>
            <input
              type='password'
              name='confirmPassword'
              id='confirmPassword'
              value={confirmPassword}
              placeholder='Confirm Password'
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <button type='submit'>Register</button>
          <div className='Forgot-Password'>
            <div>
              <input type='checkbox' id='rememberMe' />
              <label htmlFor='rememberMe'>Keep me signed in</label>
            </div>
          </div>
        </form>
      </div>
      <div className='Register-SignUp'>
        <p>
          Already a member? <Link to='/login'>Login</Link>
        </p>
        <button>Sign in with Google</button>
      </div>
    </div>
  );
};

export default Register;
