import { createMuiTheme } from '@material-ui/core/styles';
import { theme } from './theme';

export const materialTheme = createMuiTheme({
  palette: {
    common: {
      black: theme.black,
      white: theme.white,
    },
    primary: {
      light: theme.greyLight,
      main: theme.grey,
      dark: theme.contrast,
    },
    secondary: {
      light: theme.greyLight,
      main: theme.grey,
      dark: theme.contrast,
    },
    info: {
      light: theme.greyLight,
      main: theme.grey,
      dark: theme.contrast,
    },
  },
  typography: {
    fontFamily: theme.josefin,
  },
});
