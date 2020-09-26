import { ApolloServer, PubSub } from 'apollo-server';
import mongoose from 'mongoose';

function startServer({ typeDefs, resolvers }) {
    mongoose.connect('mongodb://127.0.0.1:27017cursographql',{
        useNewUrlParser: true,
        useUnifiedTopology: true,
})

    const pubsub = new PubSub();
    const server = new ApolloServer({ typeDefs, resolvers, context: { pubsub } });
    server.listen().then(({ url }) => console.log(`🔥 Server started at ${url}`));
}

export default startServer;