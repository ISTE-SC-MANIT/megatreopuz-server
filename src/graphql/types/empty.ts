import { ObjectType, Field } from "type-graphql";
@ObjectType()
export class Empty {
    constructor() {
        this.sucessful = true;
    }

    @Field()
    sucessful: boolean;
}
