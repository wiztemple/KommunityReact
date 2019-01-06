import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Functional react component
 * @returns nav items for a guest
 */
const GuestNav = () => {
  return (
    <div className="navbar__nav pr-0 p__8">
      <Link to="/signup">
        <button type="button"
          className="btn btn-colorless"
          id="signBtn">Sign Up
          <i className="icon ion-md-arrow-round-forward" />
        </button>
      </Link>
          -
      <Link to="/login">
        <button type="button"
          className="btn btn-colorless"
          id="loginBtn">Login
          <i className="icon ion-ios-arrow-round-down" /></button>
      </Link>
    </div>

  );
};

export default GuestNav;
