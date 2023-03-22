import React, { useState } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import './topbar.css';

import { AiOutlineQuestionCircle } from 'react-icons/ai';
import { MdBed } from 'react-icons/md';
import Search from '../searchBar/Search';

const NavBar = () => {
  const [currentPage, setCurrentPage] = useState('stays');
  return (
    <Router>
      <div className="topbarContainer">
        <div className="topbarWrapper">
          <div className="topbarHead">
            <Link className="logo">Booking.com</Link>
            <div className="topbarHeadRight">
              <button className="headerButton">Currency</button>
              <button className="headerButton">Country</button>
              <button className="headerButton">
                <AiOutlineQuestionCircle />
              </button>
              <button className="headerButton">List yout property</button>

              <button className="entryButton">Register</button>
              <button className="entryButton">Sign In</button>
            </div>
          </div>
          <div className="topbarMiddle">
            <div
              className={`${
                currentPage === 'stays' ? 'currentPage' : 'otherPages'
              }`}
              onClick={() => {
                setCurrentPage('stays');
              }}
            >
              <MdBed className="text-[20px] mr-[4px] " />
              Stays
            </div>
            <div
              className={`${
                currentPage === 'flights' ? 'currentPage' : 'otherPages'
              }`}
              onClick={() => {
                setCurrentPage('flights');
              }}
            >
              Flights
            </div>
            <div
              className={`${
                currentPage === 'carRentals' ? 'currentPage' : 'otherPages'
              }`}
              onClick={() => {
                setCurrentPage('carRentals');
              }}
            >
              Car rentals
            </div>
            <div
              className={`${
                currentPage === 'attractions' ? 'currentPage' : 'otherPages'
              }`}
              onClick={() => {
                setCurrentPage('attractions');
              }}
            >
              Attractions
            </div>
            <div
              className={`${
                currentPage === 'airportTaxis' ? 'currentPage' : 'otherPages'
              }`}
              onClick={() => {
                setCurrentPage('airportTaxis');
              }}
            >
              Airport taxis
            </div>
          </div>
          <div className="topbarBottom">
            <h1 className="text-[40px] font-bold text-white mt-[80px]">
              Find your next stay
            </h1>
            <h3 className="text-[24px] font-semibold text-white">
              Search low prices on hotels, homes and much more...
            </h3>
          </div>
          <Search />
        </div>
      </div>
    </Router>
  );
};

export default NavBar;
