import React from 'react';
import './style.css';

const ServiceButton = (props) => {
  return <div className="serviceWrapper">{props.type}</div>;
};

export default ServiceButton;
