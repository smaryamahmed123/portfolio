import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#d77a61', // primary color
    },
    secondary: {
      main: '#d8b4a0', // secondary color
    },
    background: {
      default: '#eff1f3', // background color
      paper: '#dbd3d8', // paper color
    },
    text: {
      primary: '#223843', // primary text color
      secondary: '#dbd3d8', // secondary text color
    },
  },
});

export default theme;
