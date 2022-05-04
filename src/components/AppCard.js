import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import AppButton from './AppButton';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';



function AppCard({brewerie}) {
  const navigate=useNavigate();
  
  return(
    <div>
      
   <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="name">
          {brewerie.name.charAt(0)}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
          
          </IconButton>
        }
        title={brewerie.name}
  
      />
    
      <CardContent>
      <Typography variant="body2" color="text.secondary">
      <b>brewery_type:</b> {brewerie.brewery_type}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        <b>city:</b> {brewerie.city}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
     
        <AppButton shadow="true" type="info"
border="round" size="big" onClick={() =>  navigate('/cardDetails',{state:{brewerie:brewerie}})
}>view card details</AppButton>
       
      </CardActions>
 
    </Card>
    </div>
  
    
  );
}

export default AppCard;