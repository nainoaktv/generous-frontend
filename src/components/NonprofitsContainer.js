import axios from 'axios';
import React, { useEffect, useState } from 'react';
// import Nonprofits from './Nonprofits';
// const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;
// const token = process.env.token;
const apiKey = process.env.API_KEY;

function NonprofitsContainer() {

  const [searchValue, setSearchValue] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  function handleSearchInputChange(event) {
    setSearchValue(event.target.value);
    if (event.target.value === "") {
      setSearchResults([]);
    } else {
      setNewSearch(event.target.value);
    }
  }

  function setNewSearch(newSearchValue) {
    axios.get(`https://partners.every.org/v0.2/search/${newSearchValue}?apiKey=${apiKey}`)
    .then(handleResult)
    .then(handleData);
  }

  function handleResult(result) {
    return result.json();
  }

  function handleData(data) {
    setSearchResults(data.nonprofits);
  }

  function handleNonprofit(searchResult) {
    console.log(searchResult);
    return (
    <li key={searchResult.name}>
      <a href={searchResult.profileUrl + "#donate"}>{searchResult.name}</a>
      <ul>{searchResult.description}</ul>    
    </li>
    );
  }

  return (
    <div className="App">
      <div className="Header">
        <h2>NonProfit Search</h2>
      </div>
      <div className="Search">
        <form>
          <input placeholder="Search for a nonprofit!" type="search" name="search" value={searchValue} onChange={handleSearchInputChange}/>
        </form>
      </div>
      <ul>{searchResults.map(handleNonprofit)}</ul>
    </div>
  );
}

export default NonprofitsContainer;