import React from 'react';
import Card from './AppCard';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

function SearchList({ breweries }) {

  return (
    <Container>
      <Grid container spacing={3} >
        {breweries.map(brewerie => (
          <Grid item key={brewerie.id} xs={12} md={6} lg={4} >
            <Card key={brewerie.id} brewerie={brewerie} />
          </Grid>
        ))}

      </Grid>
    </Container>
  );
}

export default SearchList;