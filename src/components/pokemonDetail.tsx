import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import '../App.css';


const PokemonDetail = () => {

  const [pokeName, setPokeName] = useState<string>('')
  const [pokeImg, setPokeImg] = useState<string>('')
  const [pokeExpla, setPokeExpla] = useState<string>('')

  const fetchUrl = 'https://pokeapi.co/api/v2/pokemon-species/1/'

  // const queryPokeApi = () => {
    fetch(fetchUrl, { method: 'GET' })
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        console.log(data)
        setPokeName(data.names[0].name)
        setPokeExpla(data.flavor_text_entries[29].flavor_text)
      });
  // }

  console.log(pokeName)

  return (
    <div className="App">
      <header className="App-header">
        <Card sx={{ maxWidth: 750 }}>
          <CardMedia
            component="img"
            height="140"
            image={`${process.env.PUBLIC_URL}/img/sample.jpg`}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              { pokeName }
            </Typography>
            <Typography variant="body2" color="text.secondary">
              { pokeExpla }
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </header>
    </div>
  );
}

export default PokemonDetail;
