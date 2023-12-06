import { createTheme } from '@mui/material';

declare module '@mui/material/styles' {
  interface Palette {
    pink: Palette['primary'];
    offWhite: Palette['primary'];
    gradient: string;
  }
  interface PaletteOptions {
    pink: PaletteOptions['primary'];
    offWhite: PaletteOptions['primary'];
    gradient: string;
  }
}

const theme = createTheme({
  palette: {
    primary: {
      main: '#0f9d55',
      contrastText: '#FAFAFA',
    },
    secondary: {
      main: '#FAA92F',
      contrastText: '#FAFAFA',
    },
    pink: {
      main: '#ED3A88',
      contrastText: '#FAFAFA',
    },
    offWhite: {
      main: '#FAFAFA',
      contrastText: '#ED3A88',
    },
    success: {
      main: '#00B01D',
      contrastText: '#FAFAFA',
    },
    error: {
      main: '#D6001F',
      contrastText: '#FAFAFA',
    },
    gradient: 'linear-gradient(90deg, #F58122 0.3%, #ED3A88 100.3%)',
    text: {
      primary: '#2C2C2C',
      secondary: '#5C5C5C',
      disabled: '#A4A4A4',
    },
    background: {
      default: '#F6F6F6',
      paper: '#FAFAFA',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
          '&:hover': {
            boxShadow: 'none',
          },
        },
      },
    },
  },
});

export default theme;
