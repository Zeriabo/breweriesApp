
import './App.css';
import React, { useState, useEffect } from 'react';
import Axios from "axios";
import AppCard from './components/AppCard';
import CardDetails from './components/CardDetails';
import Search from './components/Search';

function App() {

  const [breweries,setBreweries] = useState([]);

  const fetchProducts = async () => {
    const { data } = await Axios.get(
      "https://api.openbrewerydb.org/breweries"
    );
    const products = data;
    setBreweries(products);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  
  return (
    <div>
<Search details={breweries} />

  </div>
  );
}

export default App;
