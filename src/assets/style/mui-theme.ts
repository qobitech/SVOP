import { createTheme } from '@material-ui/core'

import { COLORS } from './colors'

const HEADER_COMMON_STYLE = {
  fontFamily: ['QuincyCF-Medium', 'Arial', 'sans-serif'].join(','),
  margin: 0,
  fontWeight: 400
}

export default createTheme({
  palette: {
    primary: {
      main: COLORS.fluorescentPink
    },
    secondary: {
      main: COLORS.quicksand
    },
    action: {
      disabled: COLORS.black,
      disabledOpacity: 50
    },
    text: {
      primary: COLORS.textMain,
      secondary: COLORS.textSecondary
    }
  },

  shape: {
    borderRadius: 4
  },

  props: {
    // Name of the component ⚛️
    MuiButtonBase: {
      // The properties to apply
      disableRipple: true // No more ripple, on the whole application 💣!
    }
  },

  typography: {
    fontFamily: ['Brandon Grotesque', 'Arial', 'sans-serif'].join(','),
    allVariants: {
      color: COLORS.textMain,
      textTransform: 'none'
    },
    h1: {
      ...HEADER_COMMON_STYLE,
      fontSize: 60,
      lineHeight: '72px'
    },
    h2: {
      ...HEADER_COMMON_STYLE,
      fontSize: 90,
      lineHeight: '104px'
    },
    h3: {
      ...HEADER_COMMON_STYLE,
      fontSize: 48,
      lineHeight: '56px'
    },
    h4: {
      ...HEADER_COMMON_STYLE,
      fontSize: 34,
      lineHeight: '40px'
    },
    h5: {
      ...HEADER_COMMON_STYLE,
      fontSize: 24,
      lineHeight: '30px'
    },
    h6: {
      ...HEADER_COMMON_STYLE,
      fontSize: 20,
      lineHeight: '24px'
    },
    subtitle1: {
      fontSize: 24,
      lineHeight: '28px',
      fontWeight: 420
    },
    subtitle2: {
      fontSize: 18,
      lineHeight: '24px',
      fontWeight: 450
    },
    caption: {
      fontSize: 12,
      lineHeight: '15px',
      fontWeight: 390
    },
    overline: {
      fontSize: 11,
      lineHeight: '14px',
      textTransform: 'uppercase',
      fontWeight: 450
    },
    body1: {
      fontSize: 16,
      lineHeight: '18px',
      fontWeight: 390
    },
    body2: {
      fontSize: 14,
      lineHeight: '16px',
      fontWeight: 390
    },
    button: {
      fontSize: 18,
      lineHeight: '22px',
      fontWeight: 420,
      textTransform: 'capitalize',
      letterSpacing: '1px'
    }
  },

  overrides: {
    MuiLink: {
      root: {
        fontSize: 16,
        lineHeight: '18px',
        color: COLORS.fluorescentPink,
        '&:hover': {
          color: COLORS.fluorescentPink50
        }
      }
    },
    MuiCheckbox: {
      input: {
        border: `1px solid ${COLORS.grayInputBorder}`
      }
    },
    // @ts-expect-error
    MuiPickersDay: {
      daySelected: {
        color: 'white'
      },
      current: {
        borderRadius: '50%',
        color: COLORS.black90,
        border: `1px solid ${COLORS.black}`
      }
    },
    MuiPickersStaticWrapper: {
      staticWrapperRoot: {
        borderRadius: '4px',
        filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))'
      }
    },
    MuiPickersCalendarHeader: {
      switchHeader: {
        '& p': {
          fontSize: 24,
          fontWeight: '600'
        }
      }
    }
  }
})
