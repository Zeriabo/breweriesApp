import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Navigate, useNavigate } from 'react-router-dom';
function AppCard({brewerie}) {
  const navigate=useNavigate();
  
  return(
    <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">

      <div>
          
        <p>name: {brewerie.name}</p>
        <p>breweryType: {brewerie.brewery_type}</p>
        <p>city: {brewerie.city}</p>
      </div>
      <div><button onClick={()=>{
        navigate('/cardDetails',{state:{brewerie:brewerie}})
      }} >view cardDetails</button> </div>
    </div>
    
  );
}

export default AppCard;