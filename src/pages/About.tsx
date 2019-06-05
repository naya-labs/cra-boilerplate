import * as React from 'react';
import { RouteComponentProps, Link } from '@reach/router';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import { Layout } from '../layout';

export const About: React.FC<RouteComponentProps> = () => {
  return (
    <Layout>
      <Box p={2}>
        <Link to="/">Go to Home Page</Link>
      </Box>
      <Box py={2}>
        <Typography variant="h2">About Us Page</Typography>
      </Box>
    </Layout>
  );
};
