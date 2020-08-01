import { buildSchema } from "type-graphql";
import { ApolloServer } from "apollo-server-express";
import Express from "express";
import { LoginClass } from "./login";
import admin from "firebase-admin";
import redis, { RedisClient } from "redis";
import { credentials } from "grpc";
import { AuthServiceClient } from "../protos/auth_grpc_pb";
export interface ContextType {
    res: Express.Response;
    req: Express.Request;
    redisClient: RedisClient;
    idToken?: string;
    authClient: AuthServiceClient;
}

export async function makeServer(): Promise<ApolloServer> {
    const schema = await buildSchema({
        resolvers: [LoginClass],
    });

    admin.initializeApp();

    const opts: redis.ClientOpts = {
        host: process.env.REDIS_HOST,
        port: parseInt(process.env.REDIS_PORT || "6379"),
    };
    if (process.env.REDIS_PASSWORD) opts.password = process.env.REDIS_PASSWORD;
    const redisClient = redis.createClient(opts);
    const authClient = new AuthServiceClient(
        process.env.AUTH_GRPC_SERVER ?? "",
        credentials.createInsecure()
    );

    return new ApolloServer({
        schema,
        context: ({ req, res }): ContextType => ({
            req,
            res,
            redisClient: redisClient,
            idToken: req.get("Authorization"),
            authClient,
        }),
        playground: {
            settings: {
                "request.credentials": "same-origin",
            },
        },
    });
}
