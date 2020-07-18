import React, { useState } from "react";
import { Link } from "react-router-dom";
import {} from "../../../utils/Firebase";
import "./ResetPassword.css";

const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  return (
    <div className='container ResetPassword'>
      <div className='ResetPassword-SignIn'>
        <div className='ResetPassword-bg'></div>
        <h2>Reset Your Password</h2>
        <p>I'm certain you didn't forget your email too</p>
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
          <button type='submit'>Email Me Reset Link</button>
          <div className='Forgot-Password'>
            <div></div>
            <Link to='/login'>&larr; Back to Login</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
