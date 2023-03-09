import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import HeaderButton from '../buttons/header_buttons';
import { AiOutlineQuestionCircle } from 'react-icons/ai';

import './navStyle.css';
import EntryButton from '../buttons/entry_buttons';
import ServiceButton from '../buttons/services_buttons';

const NavBar = () => {
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
            <ServiceButton
              type="Stays"
              id="firstBtn"
            />
            <ServiceButton type="Flights" />
            <ServiceButton type="Car rentals" />
            <ServiceButton type="Attractions" />
            <ServiceButton type="Airport taxis" />
          </div>
        </div>
      </div>
    </Router>
  );
};

export default NavBar;
