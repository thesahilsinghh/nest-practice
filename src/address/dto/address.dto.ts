import { Field, Float, ID, InputType, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class AddressType {
  @Field(() => ID)
  _id: string;

  @Field(() => ID)
  student_id: string;

  @Field()
  city: string;

  @Field(() => Float)
  pin_code: number;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;
}

@InputType()
export class CreateAddressInput {
  @Field(() => ID)
  student_id: string;

  @Field()
  city: string;

  @Field(() => Float)
  pin_code: number;
}

@InputType()
export class UpdateAddressInput {
  @Field(() => ID, { nullable: true })
  student_id?: string;

  @Field({ nullable: true })
  city?: string;

  @Field(() => Float, { nullable: true })
  pin_code?: number;
}
