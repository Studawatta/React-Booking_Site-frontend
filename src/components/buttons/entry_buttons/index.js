import React from 'react';
import './entry_buttons_style.css';

const EntryButton = (props) => {
  return <div className="entryWrapper">{props.type}</div>;
};

export default EntryButton;
