import {ApolloClient, InMemoryCache} from '@apollo/client'

const client = new ApolloClient({
    uri: 'http://167.71.146.35:4000/', 
    cache: new InMemoryCache()
  // link: createHttpLink({
  //     uri: 'http://167.71.146.35:4000/', 
  //         // Queries are post request by default
  //         // if you want to use GET request for queries in the future, use createHttpLink
  //     useGETForQueries: true  
  //   }),
})
export default client
