import React, { useState } from 'react';
import './check_in_outStyle.css';

const CheckInOut = (props) => {
  const [showCheckIn, setShowCheckIn] = useState(false);
  return (
    <div>
      {showCheckIn ? (
        ''
      ) : (
        <div
          className="checkInCont"
          onClick={() => {
            setShowCheckIn(!showCheckIn);
          }}
        >
          {props.type}
        </div>
      )}

      {showCheckIn ? (
        <input
          className="dateCont"
          type="date"
        />
      ) : (
        ''
      )}
    </div>
  );
};

export default CheckInOut;
