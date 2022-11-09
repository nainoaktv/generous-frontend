import React, { useState } from 'react';
import axios from 'axios';

function Nonprofits(props) {

  const [nonprofit, setNonProfit] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    console.log(`Searched Nonprofit: ${searchTerm}`)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // Use axios here to hit API
    console.log(e.target)
    let databody = {
      search: searchTerm,
    }

    return axios.post('http://localhost:8000/nonprofits/results', {
      body: databody,
      headers: {
        'Content-Type': 'application/json'
      },
    })
    .then(nonProfitResponse => setNonProfit.data.response(nonProfitResponse.data.response))
    .then(data=>console.log(data))
    .catch(err => {
      console.log(`error: ${err}`)
    })
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <p>
          {}
        </p>
        <label>
          Enter nonprofit you would like to search:
          <input type="text" onChange={handleChange} value={searchTerm} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default Nonprofits;