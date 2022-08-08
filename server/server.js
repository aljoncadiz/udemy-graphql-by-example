import { ApolloServer, gql } from 'apollo-server';


const typeDefs = gql`
	type Query {
		greeting: String
	}
`;

const resolvers = {
	Query: {
		greeting: () => 'Hello World!',
	}
};

const server = new ApolloServer({typeDefs, resolvers});
const { url } = await server.listen({port: 4040});

console.log(`Server running ${url}`);