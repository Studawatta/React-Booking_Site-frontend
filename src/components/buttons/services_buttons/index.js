import React from 'react';
import './services_button_style.css';

const ServiceButton = (props) => {
  return <div className="serviceWrapper">{props.type}</div>;
};

export default ServiceButton;
