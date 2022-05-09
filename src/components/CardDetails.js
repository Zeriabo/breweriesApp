import React from 'react';
import { useState, useEffect } from 'react';
import Axios from "axios";
import { useLocation } from 'react-router-dom';
import AppButton from './AppButton';
import { useNavigate } from "react-router-dom";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
function CardDetails() {
  const location = useLocation();
  const navigate = useNavigate();
  const [brewerie, setBrewerie] = useState([]);

  const fetchProducts = async () => {
    const { data } = await Axios.get(
      "https://api.openbrewerydb.org/breweries/"+location.state.brewerie.id
    );
    const product = data;
    setBrewerie(product);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <center>
      <Card sx={{ maxWidth: 345 }}>
        <CardHeader


          title="Showing detail about each brewery"

        />

        <CardContent>
          <Typography variant="body2" color="text.secondary">
            <b>Name:</b> {(brewerie.name!=null) ? brewerie.name : "null"}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <b>brewery_type:</b> {(brewerie.brewery_type!=null) ? brewerie.brewery_type : "null"}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <b>city:</b> {(brewerie.city!=null) ? brewerie.city : "null"}
          </Typography>

          <Typography variant="body2" color="text.secondary">
            <b>street:</b> {(brewerie.street!=null) ? brewerie.street : "null"}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <b>address_2:</b> {(brewerie.address_2!=null) ? brewerie.address_2 : "null"}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <b>address_3:</b> {(brewerie.address_3 !=null)? brewerie.address_3 : "null"}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <b>city:</b> {(brewerie.city!=null) ? brewerie.city : "null"}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <b>state:</b> {(brewerie.state !=null )? brewerie.state : "null"}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <b>county_province:</b> {(brewerie.county_province!=null) ? brewerie.county_province : "null"}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <b>postal_code:</b> {(brewerie.postal_code !=null)? brewerie.postal_code : "null"}
          </Typography>

        </CardContent>

        <div>

          <AppButton shadow="true" type="info"
            border="round" size="big" onClick={() => navigate(-1)
            }>Go Back</AppButton>
        </div>
      </Card>
    </center>);
}

export default CardDetails;