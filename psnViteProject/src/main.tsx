import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider, ThemeConsumer } from 'styled-components';
import { GlobalStyle, theme } from './components/global-styles';
import { Login } from './components/pages/login/login';

const test = "test";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Login />
      <GlobalStyle />
    </ThemeProvider>
  </React.StrictMode>
);
