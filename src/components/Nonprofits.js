import React, { useState } from 'react';
import axios from 'axios';


function Nonprofits(props) {

  const [nonprofit, setNonProfit] = useState('');

  const handleChange = (e) => {
    setNonProfit(e.target.value);
    console.log(`Searched Nonprofit: ${nonprofit}`)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // Use axios here to hit API
    axios.get('')
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <p>
          {/* DISPLAY NON PROFIT DATA HERE */}
        </p>
        <label>
          Enter nonprofit you would like to search:
          <input type="text" onChange={handleChange} value={nonprofit} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default Nonprofits;