import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Nonprofits from './Nonprofits';
const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;
const token = process.env.token;

function NonprofitsContainer(props) {

  const [nonprofit, setNonProfit] = useState([]);
  // const [searchTerm, setSearchTerm] = useState('');
  
  useEffect(() => {
    axios.get(`${REACT_APP_SERVER_URL}/nonprofits/results`, {
        Authorization: `Bearer ${token}`,
    })
    .then(response => {
        setNonProfit(response.data.nonprofits);
    })
    .catch(error => console.log(error));
}, [])

const renderNonProfit = () => {
    if (nonprofit.length) {
        let nonProfitsArray = nonprofit.map((np, idx) => <Nonprofits nonProfitsName={np.name} nonProfitsDesc={np.desription} key={idx} />)
        return nonProfitsArray
    } else {
        return <h1>There are no Non-Profits</h1>
    }
}

  return (
    <div>
      <h1>NonProfits</h1>
      {renderNonProfit()}
    </div>
  )
}

export default NonprofitsContainer;