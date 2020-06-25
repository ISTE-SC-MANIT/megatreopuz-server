import { ObjectType, Field, InterfaceType, ID } from "type-graphql";
import { uuid } from "uuidv4";
@InterfaceType()
class Node {
    @Field((type) => ID)
    id: string = uuid();
}

@ObjectType({ implements: Node })
export class Empty extends Node {
    constructor() {
        super();
    }
}

@ObjectType({ implements: Node })
export class BasicBoolean extends Node {
    constructor(value: boolean) {
        super();
        this.value = value;
    }

    @Field()
    value: boolean;
}
