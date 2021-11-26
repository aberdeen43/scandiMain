const { ApolloServer } = require("apollo-server");
const { ApolloServerPluginLandingPageGraphQLPlayground } = require("apollo-server-core");
const mongoose = require("mongoose");

const typeDefs = require("./graphql/typeDefs.js");
const resolvers = require("./graphql/resolvers")
const { MONGODB } = require("./config.js");

const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [
        ApolloServerPluginLandingPageGraphQLPlayground
    ]
});

mongoose.connect(MONGODB, { useNewUrlParser: true })
    .then(() => {
        console.log("database connected")
        return server.listen({ port: 5000 });
    },
    (reason) => {
        console.log(`reason is ${reason}`);
        return reason;
    })
    .then((res) => {
        console.log(`server running at ${res.url}`);
    })
