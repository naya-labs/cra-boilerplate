import * as React from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

interface Props {
  children: React.ReactNode;
}

export const Layout: React.FC<Props> = ({ children }) => (
  <Container>
    {/* Try to use <Box /> whenever you want to use a <div/> (https://material-ui.com/system/basics/) */}
    <Box
      flexDirection="column"
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      {children}
    </Box>
  </Container>
);
