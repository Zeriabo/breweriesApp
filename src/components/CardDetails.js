import React from 'react';
import {useLocation} from 'react-router-dom';
import AppButton from './AppButton';
import {useNavigate} from "react-router-dom";

function CardDetails() {
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location.state)
  return(
    <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">

      <div>
        <h2>Showing detail about each brewery</h2>
        <p>name: {(location.state.brewerie.name)?location.state.brewerie.name:null}</p>
        <p> brewerie type: {(location.state.brewerie.type)?location.state.brewerie.type:"null"}</p>
        <p> street: {(location.state.brewerie.street?location.state.brewerie.street:"null")}</p>
        <p>address_2: {(location.state.brewerie.address_2)?location.state.brewerie.address_2:"null"}</p>
        <p>address_3: {(location.state.brewerie.address_3?location.state.brewerie.address_3:"null")}</p>
        <p>city: {(location.state.brewerie.city?location.state.brewerie.city:"null")}</p>
        <p>state: {(location.state.brewerie.state)?location.state.brewerie.state:"null"}</p>
        <p>county_province: {(location.state.brewerie.county_province?location.state.brewerie.county_province:"null")}</p>
        <p>postal_code: {(location.state.brewerie.postal_code)?location.state.brewerie.postal_code:"null"}</p>
      </div>
      <div>
    
      <AppButton shadow="true" type="info"
border="round" size="big" onClick={() => navigate(-1)
}>Back</AppButton>
      </div>
    </div>
  );
}

export default CardDetails;