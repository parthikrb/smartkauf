/* eslint-disable unicorn/filename-case */
import React from 'react';
import fetch from 'cross-fetch';
import { NavigationContainer } from '@react-navigation/native';
import { ApolloClient, InMemoryCache, ApolloProvider, ApolloLink, HttpLink } from '@apollo/client';
import { ErrorResponse, onError } from '@apollo/client/link/error';
import Sentry from './src/sentry';
import { GraphQLError } from 'graphql';
import { LogBox, Platform } from 'react-native';
import Navigation from './src/navigation';
import SafeAreaView from './src/components/safe-area-view';

// https://stackoverflow.com/questions/69768345/react-native-warning-overwriting-font-family-style-attribute-preprocessor
LogBox.ignoreLogs(['Overwriting fontFamily style attribute preprocessor']);

const App = () => {
  const errorLink = onError(({ graphQLErrors, networkError }: ErrorResponse) => {
    if (graphQLErrors) {
      graphQLErrors.map(({ message }: GraphQLError) => {
        Sentry.captureException(`Graphql error ${message}`);
        alert(`Graphql error ${message}`);
      });
    }
    if (networkError) {
      Sentry.captureException(`Network error ${JSON.stringify(networkError.message)}`);
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
};

const AppComponent = Platform.OS === 'web' ? () => App : App;
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export default Sentry.wrap(AppComponent);
