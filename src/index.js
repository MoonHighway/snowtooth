import { ApolloServer, PubSub } from "apollo-server";
import { readFileSync } from "fs";
import path from "path";
import lifts from "./data/lifts";
import trails from "./data/trails";
import resolvers from "./resolvers";

require("dotenv").config();

const typeDefs = readFileSync(
  path.join(__dirname, "./typeDefs.graphql"),
  "UTF-8"
);

const pubsub = new PubSub();

const context = { lifts, trails, pubsub };

const PORT = process.env.PORT || 4000;

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context
});

server
  .listen({ port: PORT })
  .then(({ port }) =>
    console.log(`GraphQL Server is running at localhost:${port}`)
  );
