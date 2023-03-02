import React, { useState } from 'react';
import './roomsStyle.css';

const Rooms = () => {
  const [showInputs, setShowInputs] = useState(true);
  return (
    <div>
      <div
        className="roomsCont"
        onClick={() => {
          setShowInputs(!showInputs);
        }}
      >
        0 adults 0 children 0 rooms
      </div>
      {showInputs ? (
        <div className="inputCont">
          <div className="cont">
            <span>Adults</span>
            <div className="changeValCont">
              <div className="decrease"> -</div>
              <span className="val">1</span>
              <div className="increase">+</div>
            </div>
          </div>
          <div className="cont">
            <span>children</span>
            <div className="changeValCont">
              <div className="decrease"> -</div>
              <span className="val">1</span>
              <div className="increase">+</div>
            </div>
          </div>
          <div className="cont">
            <span>Rooms</span>
            <div className="changeValCont">
              <div className="decrease"> -</div>
              <span className="val">1</span>
              <div className="increase">+</div>
            </div>
          </div>
          <div className="confirmation">Done</div>
        </div>
      ) : (
        ''
      )}
    </div>
  );
};

export default Rooms;
