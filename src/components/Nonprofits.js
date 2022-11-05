import React, { useState } from 'react';


const Nonprofits = () => {

  const [nonprofit, setNonProfit] = useState('');

  const handleChange = (event) => {
    setNonProfit(event.target.value);
    console.log(`Searched Nonprofit: ${nonprofit}`)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`results for nonprofit: ${nonprofit}`);
  }

  return (
    <div>
      <form>
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