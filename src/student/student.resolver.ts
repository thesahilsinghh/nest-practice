import {
  Resolver,
  Query,
  Mutation,
  Args,
  ID,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { StudentService } from './student.service';
import { AddressService } from '../address/address.service';
import {
  StudentType,
  CreateStudentInput,
  UpdateStudentInput,
} from './dto/student.dto';
import { AddressType } from '../address/dto/address.dto';

@Resolver(() => StudentType)
export class StudentResolver {
  constructor(
    private readonly studentService: StudentService,
    private readonly addressService: AddressService,
  ) {}

  @Query(() => [StudentType], { name: 'students' })
  async getStudents(): Promise<StudentType[]> {
    return this.studentService.getStudents();
  }

  @Query(() => StudentType, { name: 'student', nullable: true })
  async getStudentById(
    @Args('id', { type: () => ID }) id: string,
  ): Promise<StudentType | null> {
    return this.studentService.getStudentById(id);
  }

  @Mutation(() => StudentType, { name: 'createStudent' })
  async createStudent(
    @Args('input') input: CreateStudentInput,
  ): Promise<StudentType> {
    return this.studentService.createStudent(input);
  }

  @Mutation(() => StudentType, { name: 'updateStudent', nullable: true })
  async updateStudent(
    @Args('id', { type: () => ID }) id: string,
    @Args('input') input: UpdateStudentInput,
  ): Promise<StudentType | null> {
    return this.studentService.updateStudent(id, input);
  }

  @Mutation(() => StudentType, { name: 'deleteStudent', nullable: true })
  async deleteStudent(
    @Args('id', { type: () => ID }) id: string,
  ): Promise<StudentType | null> {
    return this.studentService.deleteStudent(id);
  }

  @ResolveField('addresses', () => [AddressType], { nullable: true })
  async addresses(@Parent() student: StudentType): Promise<AddressType[]> {
    return this.addressService.getAddressesByStudentId(student._id);
  }
}
