import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AWSAppSyncClient, { AUTH_TYPE } from 'aws-appsync';
import { ApolloProvider } from 'react-apollo';
import Amplify from 'aws-amplify';

import * as serviceWorker from './serviceWorker';
import './index.css';
import config from './aws-exports';

Amplify.configure(config);

const client = new AWSAppSyncClient({
  disableOffline: true,
  url: config.aws_appsync_graphqlEndpoint,
  region: config.aws_appsync_region,
  auth: {
    type: AUTH_TYPE.API_KEY,
    apiKey: config.aws_appsync_apiKey,
  },
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root'),
);
serviceWorker.unregister();
