import React from 'react';
import Card from './AppCard';

function SearchList({ breweries }) {

  const filtered = breweries.map(brewerie =>  <Card key={brewerie.id} brewerie={brewerie} />); 
  return (
    <div>
      {filtered}
    </div>
  );
}

export default SearchList;