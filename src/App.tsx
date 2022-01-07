import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import img from './img/sample.jpg';
import './App.css';

function App() {
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
              サンプル
            </Typography>
            <Typography variant="body2" color="text.secondary">
              これからapiでデータを取得して表示していきます。
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

export default App;
