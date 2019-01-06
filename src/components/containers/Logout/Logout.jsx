import React from 'react';
import { Redirect } from 'react-router-dom';
import { clearStorage } from '../../../utils/localStorage';

/**
 * Functional component to reset localstorage
 * and redirect the user to the homepage
 * @returns {ReactObject} Redirect component
 */
export default function Logout() {
  clearStorage();
  return (
    <Redirect to="/" />
  );
}
