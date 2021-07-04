import { ApolloClient, InMemoryCache } from '@apollo/client';

const apiUrl = 'https://countries.trevorblades.com';

const client = new ApolloClient({
  uri: apiUrl,
  cache: new InMemoryCache(),
});

export default client;
