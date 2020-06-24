import { ObjectType, Field } from "type-graphql";
import { uuid } from "uuidv4";
@ObjectType()
export class Empty {
    @Field()
    id: string = uuid();
}

@ObjectType()
export class BasicBoolean {
    constructor(value: boolean) {
        this.value = value;
    }

    @Field()
    id: string = uuid();

    @Field()
    value: boolean;
}
