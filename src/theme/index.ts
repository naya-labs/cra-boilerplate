import { createMuiTheme } from '@material-ui/core';
import blue from '@material-ui/core/colors/blue';

/**
 * you can override the default button behavior here or in
 * the /globals/Button.tsx file.
 */
const buttonOverride = {
  MuiButton: {
    text: {
      borderRadius: 3,
    },
  },
};

/**
 * Customize the file according to the designs so that
 * the changes can be reflected across the application.
 */
const theme = createMuiTheme({
  typography: {
    // update the font family depending on the design file
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
    ].join(','),
  },
  // update the color palette. (https://material-ui.com/customization/palette/)
  palette: {
    primary: blue,
  },
  // Make global updates (https://material-ui.com/customization/globals/)
  props: {
    MuiButtonBase: {},
  },
  overrides: buttonOverride,
});

export default theme;
