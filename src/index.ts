import './env';
import express from 'express';
import { makeServer } from './graphql';
import cookieParser from 'cookie-parser';
import cors from 'cors';
async function main() {
  // Make the application
  const app = express();

  // Cookie parser
  app.use(cookieParser(process.env.COOKIE_SECRET));
  app.use(cors());
  // Connect to graphql
  //   (await makeServer()).applyMiddleware({ app, path: '/graphql' });
  const server = await makeServer();
  await server.start();
  await server.applyMiddleware({ app, path: '/graphql' });

  // Extract port from the environment
  const port = process.env.PORT;
  if (!port) throw new Error(`Missing port from the environment`);
  // Listen on the port
  app.listen(port, () => {
    console.log(`Listning to port ${port}`);
  });
}

main();
