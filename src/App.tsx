import { Box } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.css';
import Nav from './nav/Nav';
import Home from './screens/Home';
import Header from './ui/header';
import { theme } from './ui/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Box
        sx={{
          padding: 5,
        }}
      >
          <Nav/>
      </Box>
    </ThemeProvider>
  );
}

export default App;
