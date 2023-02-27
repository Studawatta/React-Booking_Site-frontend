import React from 'react';
import './style.css';

const HeaderButton = (props) => {
  return <div className="headerWrapper">{props.type}</div>;
};

export default HeaderButton;
