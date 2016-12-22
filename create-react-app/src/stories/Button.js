import React from 'react';

const buttonStyles = {
  border: '1px solid #eee',
  borderRadius: 5,
  borderBottom: 'solid 3px lightgray', 
  backgroundColor: '#F5F5F5',
  cursor: 'pointer',
  color: 'lightgray',
  fontSize: 25,
  padding: '3px 10px',
  margin: 10,
};

const Button = ({ children, onClick }) => (
  <button
    style={buttonStyles}
    onClick={onClick}
  >
    {children}
  </button>
);

Button.propTypes = {
  children: React.PropTypes.string.isRequired,
  onClick: React.PropTypes.func,
};

export default Button;
