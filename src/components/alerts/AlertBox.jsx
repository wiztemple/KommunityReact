import React from 'react';
import PropTypes from 'prop-types';
import './alert.scss';

const AlertBox = ({ className, message }) => {
  return (
    <div className={`alert alert-${className}}`}>
      <p>{message}</p>
    </div>
  );
};

AlertBox.propTypes = {
  className: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired
};

export default AlertBox;
