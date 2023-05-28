import React, { useState } from "react";
import { login } from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, NavLink } from "react-router-dom";
import './LoginForm.css';

function LoginFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data) {
      setErrors(data);
    }
  };

  const demoUser = () => {
    setEmail("demo1@aa.io");
    setPassword("password");
    dispatch(login("demo@aa.io", "password"))
      .catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) {
          setErrors(["The provided credentials were invalid."]);
        }
      });
  }

  return (
    <div className="login-page">
      <div className="login-page-form-container">
        <div>
          <h1 className="login-form-header">SIGN IN</h1>
          <form onSubmit={handleSubmit} className="login-page-form">
            <div style={{ color: 'red' }}>
              {errors.map((error, idx) => (
                <div key={idx}>{error}</div>
              ))}
            </div>
            <div style={{ color: '#1999FF', fontSize: '13px', fontWeight: 'bold'}}>
              SIGN IN WITH EMAIL
            </div>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{padding: '8px 8px'}}
            />
            <div style={{ color: '#AFAFAF', fontSize: '13px', fontWeight: 'bold' }}>
              PASSWORD
            </div>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{padding: '8px 8px'}}
            />
            <button className="login-page-button" type="submit">Sign In</button>
            <div className='or-text' style={{ alignSelf: 'center', color: 'white'}}>or</div>
            <button className="login-page-button" onClick={demoUser}>Log in as Demo User</button>
          </form>
        </div>
      </div>
      <div className="login-page-footer">
        <div className="login-page-footer-info">
          <div>
            Join Vapor Games and discover
          </div>
          <div>
            thousands of games to play.
          </div>
          <div>
            <NavLink to='/signup' className="signup-text">
              Join Vapor Games
            </NavLink>
          </div>
        </div>
        <div>
          <img style={{ maxWidth: '200px' }} src='https://store.cloudflare.steamstatic.com/public/shared/images/login/join_pc.png?v=1' />
        </div>
        <div className="login-page-footer-info">
          <div>
            <NavLink to='/signup' className="signup-footer-button">
              Join Vapor Games
            </NavLink>
          </div>
          <div style={{ marginTop: '1em'}}>It's free and easy to use.</div>
        </div>
      </div>
    </div>
  );
}

export default LoginFormPage;
