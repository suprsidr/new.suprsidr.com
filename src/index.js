import React from 'react';
import { render } from 'react-dom';
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider } from 'react-apollo';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

const client = new ApolloClient({
  link: createHttpLink({ uri: 'https://3wzp7qnjv.lp.gql.zone/graphql' }),
  cache: new InMemoryCache()
});

const Root = () => (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);

render(<Root />, document.getElementById('root'));
registerServiceWorker();
