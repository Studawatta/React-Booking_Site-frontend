import React from 'react';

import './check_in_outStyle.css';

const CheckInOut = () => {
  return (
    <div>
      <input
        placeholder="Date"
        class="textbox-n"
        type="text"
        onfocus="(this.type='date')"
        onblur="(this.type='text')"
        id="date"
      />
    </div>
  );
};

export default CheckInOut;
