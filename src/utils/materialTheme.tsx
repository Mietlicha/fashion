import { createMuiTheme } from '@material-ui/core/styles';
import { theme } from './theme';

const { black, white, grey, contrast, greyLight, josefin } = theme;

export const materialTheme = createMuiTheme({
  palette: {
    common: {
      black: black,
      white: white,
    },
    primary: {
      light: greyLight,
      main: grey,
      dark: contrast,
    },
    secondary: {
      light: greyLight,
      main: grey,
      dark: contrast,
    },
  },
  typography: {
    fontFamily: josefin,
  },
  overrides: {
    MuiList: {
      padding: {
        paddingTop: 0,
        paddingBottom: 0,
      },
    },
    MuiPaper: {
      root: {
        marginTop: '25px',
      },
    },
    MuiListItem: {
      button: {
        '&:hover': {
          backgroundColor: 'none',
        },
      },
    },
  },
});
