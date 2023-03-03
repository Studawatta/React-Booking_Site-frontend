import React, { useState } from 'react';

import './roomsStyle.css';

const Rooms = () => {
  const [showInputs, setShowInputs] = useState(false);

  const [adultsCount, setAdultsCount] = useState(1);
  const [childrenCount, setChildrenCount] = useState(0);
  const [roomsCount, setRoomsCount] = useState(1);

  return (
    <div>
      <div
        className="roomsCont"
        onClick={() => {
          setShowInputs(!showInputs);
        }}
      >
        {adultsCount} adults {childrenCount} children {roomsCount} rooms
      </div>
      {showInputs ? (
        <div className="inputCont">
          <div className="cont">
            <span>Adults</span>
            <div className="changeValCont">
              <div
                className={`${adultsCount === 1 ? 'notAllowed' : 'decrease'}`}
                onClick={() => {
                  if (adultsCount > 1) {
                    setAdultsCount(adultsCount - 1);
                  }
                }}
              >
                -
              </div>
              <span className="val">{adultsCount}</span>
              <div
                className="increase"
                onClick={() => {
                  setAdultsCount(adultsCount + 1);
                }}
              >
                +
              </div>
            </div>
          </div>
          <div className="cont">
            <span>children</span>
            <div className="changeValCont">
              <div
                className={`${childrenCount <= 0 ? 'notAllowed' : 'decrease'}`}
                onClick={() => {
                  if (childrenCount > 0) {
                    setChildrenCount(childrenCount - 1);
                  }
                }}
              >
                -
              </div>
              <span className="val">{childrenCount}</span>
              <div
                className="increase"
                onClick={() => {
                  setChildrenCount(childrenCount + 1);
                }}
              >
                +
              </div>
            </div>
          </div>
          <div className="cont">
            <span>Rooms</span>
            <div className="changeValCont">
              <div
                className={`${roomsCount <= 1 ? 'notAllowed' : 'decrease'}`}
                onClick={() => {
                  if (roomsCount > 1) {
                    setRoomsCount(roomsCount - 1);
                  }
                }}
              >
                -
              </div>
              <span className="val">{roomsCount}</span>
              <div
                className="increase"
                onClick={() => {
                  setRoomsCount(roomsCount + 1);
                }}
              >
                +
              </div>
            </div>
          </div>
          <div
            className="confirmation"
            onClick={() => {
              setShowInputs(false);
            }}
          >
            Done
          </div>
        </div>
      ) : (
        ''
      )}
    </div>
  );
};

export default Rooms;
