import * as React from 'react';
import { RouteComponentProps, Link } from '@reach/router';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import { Button } from '../components/globals/Button';
import { Layout } from '../layout';
import { listPosts } from '../graphql/queries';
import { ListPostsQuery, ListPostsQueryVariables } from '../API';

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
      <Typography variant="h4">Blog Posts</Typography>
      <Query<ListPostsQuery, ListPostsQueryVariables>
        query={gql(listPosts)}
        variables={{ limit: 100 }}
      >
        {({ loading, error, data }) => {
          if (loading) {
            return <p>loading</p>;
          }
          if (error) {
            return <p>Error :(</p>;
          }
          if (!data) {
            return null;
          }
          if (data && data.listPosts && data.listPosts.items) {
            return data.listPosts.items.map((row, index) => (
              <Typography key={index} variant="body1">
                {row && row.title}
              </Typography>
            ));
          }
        }}
      </Query>
    </Layout>
  );
};
