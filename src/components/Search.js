import React, { useState } from 'react';
import SearchList from './SearchList';
import TextField from '@mui/material/TextField';
function Search({ details }) {
  const [searchField, setSearchField] = useState("");
  const filteredbreweries = details.filter(
    brewerie => {
      return (
        brewerie
        .name
        .toLowerCase()
        .includes(searchField.toLowerCase())
      );
    }
  );

  const handleChange = e => {
    setSearchField(e.target.value);
  };



  return (
    
    <section className="garamond">
      <div className="navy georgia ma0 grow">
        <h2 className="f2">Search your brewerie</h2>
      </div>
      <div className="pa2">
        <TextField id="standard-basic" label="Search" variant="standard"  type = "search" 
          placeholder = "Search filteredbreweries" 
          onChange = {handleChange}/>
      </div>
      <br />  <br />  <br />
     <SearchList breweries={filteredbreweries}/>
    
    </section>
  );
}

export default Search;