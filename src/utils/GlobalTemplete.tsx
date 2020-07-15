import React from 'react';
import GlobalStyle from './GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import {
  StylesProvider,
  ThemeProvider as MaterialThemeProvider,
} from '@material-ui/styles';
import { materialTheme } from './materialTheme';

const GlobalTemplete = ({ children }) => {
  return (
    <StylesProvider injectFirst>
      <ThemeProvider theme={theme}>
        <MaterialThemeProvider theme={materialTheme}>
          <GlobalStyle />
          <div>{children}</div>
        </MaterialThemeProvider>
      </ThemeProvider>
    </StylesProvider>
  );
};

export default GlobalTemplete;
