import React from 'react';
import { Link } from 'react-router-dom';
import { clearStorage } from '../../../utils/localStorage';

/**
 * Functional react component
 * @returns nav items for a user
 */
const UserNav = () => {
  return (
    <div className="navbar__nav pr-0 p__8 dropdown pt-1">
      <Link to="/"><i className="icon ion-md-person" /></Link>
      <div className="dropdown-content">
        <Link to="/" onClick={() => clearStorage()}>Log out <i className="icon ion-ios-power" /></Link>
        <Link to="/">Profile <i className="icon ion-md-person" /></Link>
      </div>
    </div>
  );
};

export default UserNav;
