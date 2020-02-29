import { ApolloServer } from 'apollo-server-express'
import express from 'express'
import { importSchema } from 'graphql-import'
import { makeExecutableSchema } from 'graphql-tools'
import 'dotenv/config'

import resolvers from '../src/resolvers'

async function start() {
  // instance of express server
  const app = express()
  //importSchema imports schema
  const typeDefs = await importSchema('./src/types/schema.graphql')
  const Resolvers = resolvers
  // stitch the schemas together
  const schema = makeExecutableSchema({ typeDefs, Resolvers })
  // apollo server
  const server = new ApolloServer({ schema })

  server.applyMiddleware({ app })

  //start server
  app.listen({ port: process.env.URL }, () => {
    console.log(
      `🚀 Server ready at http://localhost:${process.env.URL}${server.graphqlPath}`
    )
  })
}

start().catch(err => console.log(err))
