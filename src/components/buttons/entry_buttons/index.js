import React from 'react';
import './style.css';

const EntryButton = (props) => {
  return <div className="entryWrapper">{props.name}</div>;
};

export default EntryButton;
