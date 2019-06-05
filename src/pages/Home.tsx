import * as React from 'react';
import { RouteComponentProps, Link } from '@reach/router';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import { Button } from '../components/globals/Button';
import { Layout } from '../layout';

export const Home: React.FC<RouteComponentProps> = () => {
  return (
    <Layout>
      <Box p={2}>
        <Link to="/about">Go to About Page</Link>
      </Box>
      <Box py={2}>
        <Typography variant="h4">Welcome to CRA Boilerplate</Typography>
      </Box>
      <Button>Hello world</Button>
    </Layout>
  );
};
