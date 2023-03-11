import React, { useState } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import HeaderButton from '../buttons/header_buttons';
import { AiOutlineQuestionCircle } from 'react-icons/ai';

import './navStyle.css';
import EntryButton from '../buttons/entry_buttons';
import LocationInput from '../inputs/search_inputs/location';
import CheckInOut from '../inputs/search_inputs/check_in_out';
import Rooms from '../inputs/search_inputs/rooms';
import SearchButton from '../buttons/search_button';
import { MdBed } from 'react-icons/md';

const NavBar = () => {
  const [currentPage, setCurrentPage] = useState('stays');
  return (
    <Router>
      <div className="navWrapper">
        <div className="navCont">
          <div className="navHead">
            <Link className="homeLink">Booking.com</Link>
            <div className="headerB">
              <HeaderButton type="LKR" />
              <HeaderButton type="Country" />
              <HeaderButton type={<AiOutlineQuestionCircle />} />
              <HeaderButton type="List your property" />
              <EntryButton type="Register" />
              <EntryButton type="Sign in" />
            </div>
          </div>
          <div className="raw_2">
            <div
              className={`${currentPage === 'stays' ? 'cPage' : 'page'}`}
              onClick={() => {
                setCurrentPage('stays');
              }}
            >
              <MdBed className="text-[20px] mr-[4px] " />
              Stays
            </div>
            <div
              className={`${currentPage === 'flights' ? 'cPage' : 'page'}`}
              onClick={() => {
                setCurrentPage('flights');
              }}
            >
              Flights
            </div>
            <div
              className={`${currentPage === 'carRentals' ? 'cPage' : 'page'}`}
              onClick={() => {
                setCurrentPage('carRentals');
              }}
            >
              Car rentals
            </div>
            <div
              className={`${currentPage === 'attractions' ? 'cPage' : 'page'}`}
              onClick={() => {
                setCurrentPage('attractions');
              }}
            >
              Attractions
            </div>
            <div
              className={`${currentPage === 'airportTaxis' ? 'cPage' : 'page'}`}
              onClick={() => {
                setCurrentPage('airportTaxis');
              }}
            >
              Airport taxis
            </div>
          </div>
          <div className="raw_3">
            <h1 className="text-[40px] font-bold text-white mt-[80px]">
              Find your next stay
            </h1>
            <h3 className="text-[24px] font-semibold text-white">
              Search low prices on hotels, homes and much more...
            </h3>
          </div>
          <div className="searchBar">
            <LocationInput />
            <div className="flex">
              <CheckInOut type="Check-in" />
              <CheckInOut type="Check-out" />
            </div>

            <Rooms />
            <SearchButton />
          </div>
        </div>
      </div>
    </Router>
  );
};

export default NavBar;
