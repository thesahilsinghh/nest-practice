import { Field, Float, ID, InputType, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class StudentType {
  @Field(() => ID)
  _id: string;

  @Field()
  name: string;

  @Field(() => Float)
  age: number;

  @Field({ nullable: true })
  email?: string;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;
}

@InputType()
export class CreateStudentInput {
  @Field()
  name: string;

  @Field(() => Float)
  age: number;

  @Field({ nullable: true })
  email?: string;
}

@InputType()
export class UpdateStudentInput {
  @Field({ nullable: true })
  name?: string;

  @Field(() => Float, { nullable: true })
  age?: number;

  @Field({ nullable: true })
  email?: string;
}
