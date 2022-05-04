import React from 'react';
import {useLocation} from 'react-router-dom';
import AppButton from './AppButton';
import {useNavigate} from "react-router-dom";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
function CardDetails() {
  const location = useLocation();
  const navigate = useNavigate();
  return(
    <center>
    <Card sx={{ maxWidth: 345 }}>
  <CardHeader
       
      
        title="Showing detail about each brewery"
  
      />
  
  
  <CardContent>
  

      <Typography variant="body2" color="text.secondary">
        <b>Name:</b> {(location.state.brewerie.name?location.state.brewerie.name:"null")}
        </Typography>
        <Typography variant="body2" color="text.secondary">
      <b>brewery_type:</b> {(location.state.brewerie.brewery_type)?location.state.brewerie.brewery_type:"null"}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        <b>city:</b> {(location.state.brewerie.city?location.state.brewerie.city:"null")}
        </Typography>
 
        <Typography variant="body2" color="text.secondary">
        <b>street:</b> {(location.state.brewerie.street?location.state.brewerie.street:"null")}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        <b>address_2:</b> {(location.state.brewerie.address_2?location.state.brewerie.address_2:"null")}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        <b>address_3:</b> {(location.state.brewerie.address_3?location.state.brewerie.address_3:"null")}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        <b>city:</b> {(location.state.brewerie.city?location.state.brewerie.city:"null")}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        <b>state:</b> {(location.state.brewerie.state?location.state.brewerie.state:"null")}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        <b>county_province:</b> {(location.state.brewerie.county_province?location.state.brewerie.county_province:"null")}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        <b>postal_code:</b> {(location.state.brewerie.postal_code?location.state.brewerie.postal_code:"null")}
        </Typography>
     
      </CardContent>
    
      <div>
    
      <AppButton shadow="true" type="info"
border="round" size="big" onClick={() => navigate(-1)
}>Go Back</AppButton>
      </div>
    </Card>
 </center> );
}

export default CardDetails;