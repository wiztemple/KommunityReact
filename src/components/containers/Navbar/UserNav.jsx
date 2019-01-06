import React from 'react';
import { Link } from 'react-router-dom';
import UserImg from '../../../../public/images/user.png';

/**
 * Functional react component
 * @returns nav items for a user
 */
const UserNav = () => {
  return (
    <div className="navbar__nav pr-0 p__8 dropdown">
      <Link to="/"><img src={UserImg}
        className="avatar-sm" title="Profile" /></Link>
      <div className="dropdown-content">
        <Link to="/">Log out <i className="icon ion-ios-power" /></Link>
        <Link to="/">Profile <i className="icon ion-ios-person" /></Link>
      </div>
    </div>
  );
};

export default UserNav;
