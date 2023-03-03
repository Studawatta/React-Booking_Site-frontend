import React from 'react';
import './App.css';
import SearchButton from './components/buttons/search_button';
import CheckInOut from './components/inputs/search_inputs/check_in_out';
import LocationInput from './components/inputs/search_inputs/location';
import Rooms from './components/inputs/search_inputs/rooms';

const App = () => {
  return (
    <div className="a">
      <div className="aa">
        <LocationInput />
        <CheckInOut type="Check-in Date" />
        <CheckInOut type="Check-out Date" />
        <Rooms />
        <SearchButton />
      </div>
    </div>
  );
};

export default App;
