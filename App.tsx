import React from 'react';
import fetch from 'cross-fetch';
import { NavigationContainer } from '@react-navigation/native';
import { ApolloClient, InMemoryCache, ApolloProvider, ApolloLink, HttpLink } from '@apollo/client';
import { ErrorResponse, onError } from '@apollo/client/link/error';
import Navigation from './src/navigation';
import SafeAreaView from './src/components/SafeAreaView';
import { GraphQLError } from 'graphql';

export default function App() {
  const errorLink = onError(({ graphQLErrors, networkError }: ErrorResponse) => {
    if (graphQLErrors) {
      graphQLErrors.map(({ message }: GraphQLError) => {
        alert(`Graphql error ${message}`);
      });
    }
    if (networkError) {
      alert(`Network error ${JSON.stringify(networkError.message)}`);
    }
  });

  const httpLink = new HttpLink({
    uri: process.env.GRAPHCMS_API,
    fetch,
  });

  const authLink = new ApolloLink((operation, forward) => {
    const token = process.env.GRAPHCMS_TOKEN;
    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : '',
      },
    });
    return forward(operation);
  });

  const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: ApolloLink.from([authLink, errorLink, httpLink]),
  });

  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <SafeAreaView>
          <Navigation />
        </SafeAreaView>
      </NavigationContainer>
    </ApolloProvider>
  );
}
