import React from 'react';
import './header_buttons_style.css';

const HeaderButton = (props) => {
  return <div className="headerWrapper">{props.type}</div>;
};

export default HeaderButton;
