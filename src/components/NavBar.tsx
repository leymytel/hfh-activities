import React from 'react';
import { config } from "../config";
import './NavBar.scss';
import { useAuth } from "../hooks/useAuth";
import logo from '../assets/logo.png';

const NavBar: React.FC = () => {
  const { isAuthenticated, logout } = useAuth();
  return (
    <header>
      <div className="nav-logo-wrapper">
        <img src={logo} height="40" alt={'Watt Should I Do Logo'} />
        <div>Watt Should I Do?</div>
      </div>
      {isAuthenticated ? (
        <button className="nav-button-sign-out" onClick={() => logout()}>Sign out</button>
      ) : (
        <div>
          <a href={config.pdaAuth.login} className="nav-link-login">Login</a>
          <a href={config.pdaAuth.signup} className="nav-link-signup">Sign Up</a>
        </div>
      )}
    </header>
  )
}

export default NavBar;
