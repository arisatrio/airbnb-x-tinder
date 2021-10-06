import './App.css'
import * as React from 'react';
import Container from '@mui/material/Container';

import Card from './components/Card';
import Header from './components/Header';
import Navigation from './components/Navigation';

function App() {
  return (
    <div className="wrapper">
      <Container fixed>
        <Header />
        <Card />
        <Navigation />
      </Container>
    </div>
  );
}

export default App;
