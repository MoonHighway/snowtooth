const { ApolloServer, PubSub } = require('apollo-server')
const fs = require('fs')
const lifts = require('./data/lifts')
const trails = require('./data/trails')

require('dotenv').config()

const typeDefs = fs.readFileSync('./typeDefs.graphql', 'UTF-8')
const resolvers = require('./resolvers')

const pubsub = new PubSub()

const context = { lifts, trails, pubsub }

const PORT = process.env.PORT || 4000

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context,
    engine: process.env.ENGINE_API_KEY ? true : false
})

server
    .listen({ port: PORT })
    .then(({ port }) => console.log(`GraphQL Server is running at localhost:${port}`))

