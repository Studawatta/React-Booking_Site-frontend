import React from 'react';
import './locationStyle.css';
import { MdBed } from 'react-icons/md';

const LocationInput = () => {
  return (
    <div className="locationWrapper">
      <MdBed className="bedIcon" />
      <input
        className="location"
        placeholder="Where are you going?"
        type="text"
      />
    </div>
  );
};

export default LocationInput;
