import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
function Cards() {


  return(
      
    <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
      <img className="br-100 h3 w3 dib" alt={person.name} src={process.env.PUBLIC_URL + person.imgPath} />
      <div>
        <h2>{breweries.name}</h2>
        <p>{breweries.brewery_type}</p>
        <p>{breweries.city}</p>
      </div>
    </div>
  );
}

export default Card;