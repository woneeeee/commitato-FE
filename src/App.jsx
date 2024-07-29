import React, { useState, useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import router from './routes/Route';
import GlobalStyles from './styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import theme from './styles/ThemeStyle';
import Login from './apis/auth/Login';
import { UserProvider } from './apis/UserContext';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <UserProvider>
        <Login />
        <GlobalStyles />
        <RouterProvider router={router} />
      </UserProvider>
    </ThemeProvider>
  );
}

export default App;
