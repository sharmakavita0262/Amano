/**
 *
 * All the theme colors typography and mui components can be modify from here.
 *
 */

import { createTheme } from '@mui/material/styles';

const theme2 = createTheme();

const theme = createTheme({
  breakpoints: {
    breakpoints: {
      values: {
        xxs: 0,
        xs: 575,
        sm: 767,
        md: 991,
        lg: 1200,
        xl: 1536,
      },
    },
  },
  palette: {
    common: {
      black: '#191632',
      white: '#fff',
    },
    primary: {
      main: '#24387E',
      dark: '#24387E',
      light: '#494949',
      contrastText: '#fff',
    },
    secondary: {
      main: '#FFC600',
      dark: '#c79600',
      light: '#fff94f',
      contrastText: '#000000',
    },
    info: {
      main: '#2959b3',
    },
    text: {
      primary: '#191632',
      secondary: '#14532D',
      disabled: '#4E4E4E',
    },
    textColors: {
      optional: '#C6C6C6',
    },
  },
  typography: {
    p: {
      fontWeight: 400,
      fontSize: '14px',
      lineHeight: '22px',
      fontFamily: "'Inter', sans-serif",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          padding: '15px 32px',
          [theme2.breakpoints.down('md')]: {
            padding: '10px 8px',
          },
          boxShadow: 'none',
        },
        containedSecondary: {
          fontWeight: 700,
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            background: '#FBFBFC',
            border: '1px solid #DBDBDB',
            borderRadius: '4px',
          },
        },
      },
    },
  },
});

theme.typography.h1 = {
  fontWeight: 800,
  fontFamily: "'Inter', sans-serif",

  [theme.breakpoints.up('lg')]: {
    fontSize: '70px',
    lineHeight: '99px',
  },
  [theme.breakpoints.down('lg')]: {
    fontSize: '50px',
    lineHeight: '60px',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '35px',
    lineHeight: '40px',
  },
  [theme.breakpoints.down('xs')]: {
    // fontSize: "32px",
    // lineHeight: '42px'
  },
};

theme.typography.h2 = {
  fontWeight: 800,
  fontFamily: "'Inter', sans-serif",
  [theme.breakpoints.up('lg')]: {
    fontSize: '60px',
    lineHeight: '70px',
  },
  [theme.breakpoints.down('lg')]: {
    fontSize: '40px',
    lineHeight: '50px',
  },
  [theme.breakpoints.down('md')]: {
    fontSize: '35px',
    lineHeight: '45px',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '25px',
    lineHeight: '40px',
  },
};

theme.typography.h3 = {
  fontWeight: 800,

  fontFamily: "'Inter', sans-serif",
  [theme.breakpoints.up('lg')]: {
    fontSize: '40px',
    lineHeight: '90px',
  },
  [theme.breakpoints.down('lg')]: {
    fontSize: '32px',
    lineHeight: '65px',
  },
  [theme.breakpoints.down('md')]: {
    fontSize: '30px',
    lineHeight: '55px',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '22px',
    lineHeight: '50px',
  },
};

theme.typography.h4 = {
  fontWeight: 800,

  fontFamily: "'Inter', sans-serif",
  [theme.breakpoints.up('lg')]: {
    fontSize: '30px',
    lineHeight: '40px',
  },
  [theme.breakpoints.down('lg')]: {
    fontSize: '28px',
    lineHeight: '40px',
  },
  [theme.breakpoints.down('md')]: {
    fontSize: '25px',
    lineHeight: '33px',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '18px',
    lineHeight: '28px',
  },
};

theme.typography.h5 = {
  fontWeight: 800,
  fontFamily: "'Inter', sans-serif",
  [theme.breakpoints.up('lg')]: {
    fontSize: '25px',
    lineHeight: '30px',
  },
  [theme.breakpoints.down('lg')]: {
    fontSize: '25px',
    lineHeight: '30px',
  },
  [theme.breakpoints.down('md')]: {
    fontSize: '20px',
    lineHeight: '25px',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '16px',
    lineHeight: '23px',
  },
};

theme.typography.h6 = {
  fontWeight: 800,
  fontFamily: "'Inter', sans-serif",
  [theme.breakpoints.up('lg')]: {
    fontSize: '20px',
    lineHeight: '30px',
  },
  [theme.breakpoints.down('lg')]: {
    fontSize: '20px',
    lineHeight: '30px',
  },
  [theme.breakpoints.down('md')]: {
    fontSize: '18px',
    lineHeight: '28px',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '15px',
    lineHeight: '25px',
  },
};

theme.typography.subtitle1 = {
  fontWeight: 400,
  fontFamily: "'Inter', sans-serif",
  [theme.breakpoints.up('lg')]: {
    fontSize: '16px',
    lineHeight: '20px',
  },
  [theme.breakpoints.down('lg')]: {
    fontSize: '16px',
    lineHeight: '19px',
  },
  [theme.breakpoints.down('md')]: {
    fontSize: '15px',
    lineHeight: '18px',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '15px',
    lineHeight: '16px',
  },
};

theme.typography.body1 = {
  fontWeight: 400,
  fontFamily: "'Inter', sans-serif",
  fontSize: '15px',
  lineHeight: '17px',
};
export default theme;
