import React from 'react'
import App from './App.js'
import ApolloClient from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { createHttpLink } from 'apollo-link-http'
import { ApolloProvider } from '@apollo/react-hooks'
import { setContext} from 'apollo-link-context'
import { createUploadLink } from 'apollo-upload-client'
import { ApolloLink } from 'apollo-link'  //i dont think need this actually, i just used concat, and didn't use httpLink (i think uploadLink
//takes care of it)

const httpLink = createHttpLink({
    uri: 'http://localhost:5000/' //will change for production or deployment
});

const authLink = setContext(() => {
    const token = localStorage.getItem('jwtToken');
    return {
      headers: {
        Authorization: token ? `Bearer ${token}` : ''
      }
    };
});

const uploadLink = createUploadLink({
    uri: 'http://localhost:5000/',
}); 

const client = new ApolloClient({
    link: authLink.concat(uploadLink),
    cache: new InMemoryCache(),
});

export default(
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>
);