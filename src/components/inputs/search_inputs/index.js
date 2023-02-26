import React from 'react';
import './style.css';
import { MdBed } from 'react-icons/md';

const SearchInput = () => {
  return (
    <div>
      <div className="locationWrapper">
        <MdBed className="bedIcon" />
        <input
          className="location"
          placeholder="Where are you going?"
          type="text"
        />
      </div>
      <div className="dateWrapper">
        <input
          className="date"
          type="date"
          placeholder="Check-in"
        />
      </div>
    </div>
  );
};

export default SearchInput;
