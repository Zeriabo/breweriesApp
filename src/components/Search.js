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
          ||
          brewerie
          .brewery_type
          .toLowerCase()
          .includes(searchField.toLowerCase())
          ||
          brewerie
          .city
          .toLowerCase()
          .includes(searchField.toLowerCase())
          ||
          brewerie
          .id
          .toLowerCase()
          .includes(searchField.toLowerCase())
          ||
          brewerie
          .state
          .toLowerCase()
          .includes(searchField.toLowerCase())
          ||
          brewerie
          .postal_code
          .toLowerCase()
          .includes(searchField.toLowerCase())
          ||
          brewerie
          .country
          .toLowerCase()
          .includes(searchField.toLowerCase())
          ||
         (brewerie.county_province!=null)
         &&
         brewerie
         .county_province
         .toLowerCase()
         .includes(searchField.toLowerCase())
         ||
         (brewerie.website_url!=null)
         &&
         brewerie
         .website_url
         .toLowerCase()
         .includes(searchField.toLowerCase())
         ||
         brewerie
         .created_at
         .toLowerCase()
         .includes(searchField.toLowerCase())
         ||
         brewerie
         .updated_at
         .toLowerCase()
         .includes(searchField.toLowerCase())
         ||
         (brewerie.phone!=null)
         &&
         brewerie
         .phone
         .toLowerCase()
         .includes(searchField.toLowerCase())
      );
    }
  );

  const handleChange = e => {
    setSearchField(e.target.value);
  };



  return (
<center>
    <section className="garamond">
      <div className="navy georgia ma0 grow">
        <h2 className="f2">Search your brewery</h2>
      </div>
      <div className="pa2">
        <TextField id="standard-basic" label="Search" variant="standard" type="search"
          placeholder="Search breweries"
          onChange={handleChange} />
      </div>
    <div>
    <SearchList breweries={filteredbreweries} />
    </div>
     

    </section>
    </center>
  );
}

export default Search;