import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Student, StudentDocument } from './schema/student.schema';
import {
  StudentType,
  CreateStudentInput,
  UpdateStudentInput,
} from './dto/student.dto';
import { Model, Types } from 'mongoose';

@Injectable()
export class StudentService {
  constructor(
    @InjectModel(Student.name) private studentModel: Model<StudentDocument>,
  ) {}

  async createStudent(data: CreateStudentInput): Promise<StudentType> {
    const student = new this.studentModel(data);
    const savedStudent = await student.save();
    return this.transformToGraphQLType(savedStudent);
  }

  async getStudents(): Promise<StudentType[]> {
    const students = await this.studentModel.find().exec();
    return students.map((student) => this.transformToGraphQLType(student));
  }

  async getStudentById(id: string): Promise<StudentType | null> {
    if (!Types.ObjectId.isValid(id)) {
      return null;
    }
    const student = await this.studentModel.findById(id).exec();
    return student ? this.transformToGraphQLType(student) : null;
  }

  async updateStudent(
    id: string,
    data: UpdateStudentInput,
  ): Promise<StudentType | null> {
    if (!Types.ObjectId.isValid(id)) {
      return null;
    }
    const student = await this.studentModel
      .findByIdAndUpdate(id, data, { new: true })
      .exec();
    return student ? this.transformToGraphQLType(student) : null;
  }

  async deleteStudent(id: string): Promise<StudentType | null> {
    if (!Types.ObjectId.isValid(id)) {
      return null;
    }
    const student = await this.studentModel.findByIdAndDelete(id).exec();
    return student ? this.transformToGraphQLType(student) : null;
  }

  private transformToGraphQLType(student: StudentDocument): StudentType {
    return {
      _id: (student._id as any).toString(),
      name: student.name,
      age: student.age,
      email: student.email,
      createdAt: student.createdAt,
      updatedAt: student.updatedAt,
    };
  }
}
