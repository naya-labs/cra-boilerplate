import * as React from 'react';
import { Router } from '@reach/router';
import { ThemeProvider } from '@material-ui/styles';

import { Home, About } from './pages';
import theme from './theme';

const App = () => (
  <ThemeProvider theme={theme}>
    <Router>
      <Home path="/" />
      <About path="/about" />
    </Router>
  </ThemeProvider>
);

export default App;
