import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Student } from '../../student/schema/student.schema';

export type AddressDocument = Address &
  Document & {
    createdAt?: Date;
    updatedAt?: Date;
  };

@Schema({ timestamps: true })
export class Address {
  @Prop({ type: Types.ObjectId, ref: Student.name, required: true })
  student_id: Types.ObjectId;

  @Prop({ required: true })
  city: string;

  @Prop({ type: Number, minlength: 100000, maxlength: 999999, required: true })
  pin_code: number;
}

export const AddressSchema = SchemaFactory.createForClass(Address);
