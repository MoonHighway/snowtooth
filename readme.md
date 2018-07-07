Snowtooth GraphQL API 🎿
===============
Snowtooth Mountain is a fake ski resort, and this is its real GraphQL API. You can run queries on the project at its website: `http://snowtooth.moonhighway.com`.

Running the Project Locally 🚡
-----
To run the project locally, follow these instructions:
*Basic Setup*
1. Download/clone the repo
2. Run `npm install` or `yarn`
3. View [GraphQL Playground](https://github.com/prismagraphql/graphql-playground) running on `http://localhost:4000`

Want to integrate with [Apollo Engine](https://www.apollographql.com/engine)? Follow these instructions:
*Set up with Apollo Engine*
1. Create a [free Apollo Engine account](https://engine.apollographql.com/login).
2. Get an Apollo Engine Key.
3. Create a `.env` file and put it at the root of the project.
4. In the `.env` file, add the following line:

```
ENGINE_API_KEY=<your-apollo-engine-key>
```

Then shred on some lift and trail data from the greatest fake ski resort on Earth! 

Caveats 🚠
----
This is a demo app to allow students of [Moon Highway](https://www.moonhighway.com) or [GraphQL Workshop](https://www.graphqlworkshop.com) courses to interact with some data. It updates the database (JSON files) each time someone sends a mutation, so some inconsistencies may appear if multiple people are running mutations at the same time.
