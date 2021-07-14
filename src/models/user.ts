import {
  getModelForClass,
  prop,
  index,
} from "@typegoose/typegoose";
import {
  Field,
  ObjectType,
  Int,
  registerEnumType,
} from "type-graphql";

export enum Step {
  REGISTER = "REGISTER",
  CHOOSE_TEAM = "CHOOSE_TEAM",
  PAYMENT = "PAYMENT",
  TEST = "TEST",
}

export enum Role {
  TEAM_LEADER = "TEAM_LEADER",
  TEAM_HELPER = "TEAM_HELPER",
  NOT_INITIALIZED = "NOT_INITIALIZED",
  ADMIN = "ADMIN",
}

export enum UserQuizStatus {
  NOT_STARTED = "NOT_STARTED",
  STARTED = "STARTED",
  ENDED = "ENDED",
}

registerEnumType(Step, {
  name: "Step",
  description: "Step on which user is present",
});

registerEnumType(Role, {
  name: "Role",
  description: "role of user in team",
});

registerEnumType(UserQuizStatus, {
  name: "UserQuizStatus",
  description: "status of quiz",
});

@ObjectType()
export class User {
  @Field({ nullable: true })
  _id?: string;

  @Field({ nullable: true })
  id?: string;

  @Field()
  @prop({ required: true })
  password: string;

  @Field()
  @prop({ default: "" })
  name?: string;

  @Field()
  @prop({ required: true })
  email: string;

  @Field()
  @prop({ default: "" })
  phone?: string;

  @Field()
  @prop({ required: true })
  strategy: string;

  @Field()
  @prop({ default: "" })
  city: string;

  @Field()
  @prop({ default: "" })
  resetPasswordLink: string;

  @Field()
  @prop({ default: "" })
  metadata: string;
}

export default getModelForClass(User);
