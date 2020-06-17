import { buildSchema } from "type-graphql";
import { LoginResolver } from "./login";
import { ApolloServer } from "apollo-server-express";
import Express from "express";
import { LogoutResolver } from "./logout";

export interface ContextType {
    res: Express.Response;
}

export async function makeServer(): Promise<ApolloServer> {
    const schema = await buildSchema({
        resolvers: [LoginResolver, LogoutResolver],
        validate: false,
    });

    return new ApolloServer({
        schema,
        context: ({ req, res }): ContextType => ({ res }),
        playground: {
            settings: {
                "request.credentials": "same-origin",
            },
        },
    });
}
