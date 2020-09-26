const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`

    type User {
        _id: ID!
        name: String!
        email: String!
        active: Boolean!
    }

    type Post {
        _id: ID!
        title: String!
        content: String!
        autor: User!
    }



    type Query{
        hello: String
        users: [User!]!
        getUserByEmail(email: String): User
    }

    type Mutation {
        createUser(name: String, email: String): User!
    }
`;

const users = [
    { _id: String(Math.random()), name: 'Wende', email: 'wendemendes@gmail.com', active: true },
    { _id: String(Math.random()), name: 'Fabio', email: 'fabio@gmail.com', active: false },
    { _id: String(Math.random()), name: 'Fulano', email: 'fulano@gmail.com', active: true }
];

const resolvers = {

    Query: {
        hello: () => 'Hello',
        users: () => users,
        getUserByEmail: (_, args) => {
            return users.find((user) => user.email === args.email)
        }
    },

    Mutation: {
        createUser: (_, args) => {
            const newUser = {
                _id: String(Math.random()),
                name: args.name,
                email: args.email,
                active: true,
            }

            users.push(newUser);
            return newUser;
        }
    }

};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => console.log(`Server started at ${url}`));