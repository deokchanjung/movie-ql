import { GraphQLServer } from 'graphql-yoga';
import resolvers from './graphql/resolvers';

const server = new GraphQLServer(
  // Configurations
  {
    resolvers,
    // typeDefs: 모든 Type들에 대한 정의
    typeDefs: 'graphql/schema.graphql'
  }
);

server.start(() => {
  console.log('GraphQL Server Running');
});
