import './App.css'
import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import Card from './components/Card';
import Header from './components/Header';
import Navigation from './components/Navigation';

import TinderCard from './components/TinderCard';

function App() {
  return (
    <div className="wrapper">
      <Container fixed>
        <Header />
        <Card />
        {/* <TinderCard /> */}

        <Navigation />
      </Container>
    </div>
  );
}

export default App;
