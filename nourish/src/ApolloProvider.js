import React from 'react'
import App from './App.js'
import ApolloClient from 'apollo-client'
import { inMemoryCache } from 'apollo-cache-inmemory'
import { createHttpLink } from 'apollo-link-http'
import { ApolloProvider, InMemoryCache } from '@apollo/react-hooks'

const httpLink = createHttpLink({
    uri: 'http://localhost:5000/' //will change for production or deployment
});

const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache()
});

export default(
    <ApolloProvider client={client}>
        <App/>
    </ApolloProvider>
);