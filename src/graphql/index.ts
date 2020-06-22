import { buildSchema } from "type-graphql";
import { LoginResolver } from "./login";
import { ApolloServer } from "apollo-server-express";
import Express from "express";
import { LogoutResolver } from "./logout";
import { SessionResolver } from "./validateUser";

export interface ContextType {
    res: Express.Response;
    req: Express.Request;
}

export async function makeServer(): Promise<ApolloServer> {
    const schema = await buildSchema({
        resolvers: [LoginResolver, LogoutResolver, SessionResolver],
    });

    return new ApolloServer({
        schema,
        context: ({ req, res }): ContextType => ({ req, res }),
        playground: {
            settings: {
                "request.credentials": "same-origin",
            },
        },
    });
}
