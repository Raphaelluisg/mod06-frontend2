import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider, ThemeConsumer } from 'styled-components';
import { GlobalStyle, theme } from './components/global-styles';
import { Login } from './components/pages/login/login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Users } from './components/pages/users/users';

const test = "test";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/users" element={<Users />} />
        </Routes>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  </React.StrictMode>
);
