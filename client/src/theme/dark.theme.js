import { createTheme, responsiveFontSizes } from '@mui/material/styles'
import { red } from '@mui/material/colors'
// import { selectedFont } from '@app/layout'

// Create a theme instance.
const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#3bf787',
    },
    secondary: {
      main: '#0c4538',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#000000',
      paper: '#1c1c1c',
    },
    text: {
      primary: '#ffffff',
      secondary: '#c2ffdb',
      //   primary: purple[900],
      //   secondary: purple[700],
      //   icon: purple[500],
      //   divider: purple[200],
    },
    action: {
      // active: purple[500],
      // hover: purple[300],
      // selected: purple[200],
      // disabled: purple[100],
      // disabledBackground: purple[50],
    },
  },
  mixins: {
    drawer: {
      minWidth: 210,
      width: 210,
    },
    toolbar: {
      minHeight: 72,
    },
  },
  shape: {
    borderRadius: 10.5 ,
  },
  typography: {
    fontFamily: ['Satoshi', 'sans-serif'].join(','),
  },
  shadows: [
    'none',
    '0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)',
    '0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12)',
    '0px 3px 3px -2px rgba(0,0,0,0.2),0px 3px 4px 0px rgba(0,0,0,0.14),0px 1px 8px 0px rgba(0,0,0,0.12)',
    '0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)',
    '0px 3px 5px -1px rgba(0,0,0,0.2),0px 5px 8px 0px rgba(0,0,0,0.14),0px 1px 14px 0px rgba(0,0,0,0.12)',
    '0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)',
    '0px 4px 5px -2px rgba(0,0,0,0.2),0px 7px 10px 1px rgba(0,0,0,0.14),0px 2px 16px 1px rgba(0,0,0,0.12)',
    '0px 5px 5px -3px rgba(0,0,0,0.2),0px 8px 10px 1px rgba(0,0,0,0.14),0px 3px 14px 2px rgba(0,0,0,0.12)',
    '0px 5px 6px -3px rgba(0,0,0,0.2),0px 9px 12px 1px rgba(0,0,0,0.14),0px 3px 16px 2px rgba(0,0,0,0.12)',
    '0px 6px 6px -3px rgba(0,0,0,0.2),0px 10px 14px 1px rgba(0,0,0,0.14),0px 4px 18px 3px rgba(0,0,0,0.12)',
    '0px 6px 7px -4px rgba(0,0,0,0.2),0px 11px 15px 1px rgba(0,0,0,0.14),0px 4px 20px 3px rgba(0,0,0,0.12)',
    '0px 7px 8px -4px rgba(0,0,0,0.2),0px 12px 17px 2px rgba(0,0,0,0.14),0px 5px 22px 4px rgba(0,0,0,0.12)',
    '0px 7px 8px -4px rgba(0,0,0,0.2),0px 13px 19px 2px rgba(0,0,0,0.14),0px 5px 24px 4px rgba(0,0,0,0.12)',
    '0px 7px 9px -4px rgba(0,0,0,0.2),0px 14px 21px 2px rgba(0,0,0,0.14),0px 5px 26px 4px rgba(0,0,0,0.12)',
    '0px 8px 9px -5px rgba(0,0,0,0.2),0px 15px 22px 2px rgba(0,0,0,0.14),0px 6px 28px 5px rgba(0,0,0,0.12)',
    '0px 8px 10px -5px rgba(0,0,0,0.2),0px 16px 24px 2px rgba(0,0,0,0.14),0px 6px 30px 5px rgba(0,0,0,0.12)',
    '0px 8px 11px -5px rgba(0,0,0,0.2),0px 17px 26px 2px rgba(0,0,0,0.14),0px 6px 32px 5px rgba(0,0,0,0.12)',
    '0px 9px 11px -5px rgba(0,0,0,0.2),0px 18px 28px 2px rgba(0,0,0,0.14),0px 7px 34px 6px rgba(0,0,0,0.12)',
    '0px 9px 12px -6px rgba(0,0,0,0.2),0px 19px 29px 2px rgba(0,0,0,0.14),0px 7px 36px 6px rgba(0,0,0,0.12)',
    '0px 10px 13px -6px rgba(0,0,0,0.2),0px 20px 31px 3px rgba(0,0,0,0.14),0px 8px 38px 7px rgba(0,0,0,0.12)',
    '0px 10px 13px -6px rgba(0,0,0,0.2),0px 21px 33px 3px rgba(0,0,0,0.14),0px 8px 40px 7px rgba(0,0,0,0.12)',
    '0px 10px 14px -6px rgba(0,0,0,0.2),0px 22px 35px 3px rgba(0,0,0,0.14),0px 8px 42px 7px rgba(0,0,0,0.12)',
    '0px 11px 14px -7px rgba(0,0,0,0.2),0px 23px 36px 3px rgba(0,0,0,0.14),0px 9px 44px 8px rgba(0,0,0,0.12)',
    '0px 11px 15px -7px rgba(0,0,0,0.2),0px 24px 38px 3px rgba(0,0,0,0.14),0px 9px 46px 8px rgba(0,0,0,0.12)',
  ],
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          '&&': {
            borderRadius: 10.5,
            textTransform: 'capitalize',
            '.MuiButton-label': {
              textTransform: 'capitalize',
            },
          },
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        root: {},
        tooltip: {
          backdropFilter: 'blur(5px)',
          backgroundColor: '#ffffff55',
          color: '#2F2D5C',
          borderRadius: 5,
          paddingBottom: 3,
          boxShadow: `0 6.2px 10px rgba(0, 0, 0, 0.07),
          0 11.9px 14.6px rgba(0, 0, 0, 0.049), 0 17.8px 17.1px rgba(0, 0, 0, 0.036),
          0 24.6px 18.8px rgba(0, 0, 0, 0.028), 0 33.1px 20.2px rgba(0, 0, 0, 0.023),
          0 43.5px 22.1px rgba(0, 0, 0, 0.019), 0 56px 26px rgba(0, 0, 0, 0.012),
          0 -24.6px 18.8px rgba(0, 0, 0, 0.028), 0 -33.1px 20.2px rgba(0, 0, 0, 0.023),
          0 -43.5px 22.1px rgba(0, 0, 0, 0.019), 0 -56px 26px rgba(0, 0, 0, 0.012)`,
        },
      },
    },
  },
})

const LightTheme = responsiveFontSizes(theme)

export default LightTheme
