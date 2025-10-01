import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { StudentService } from './student.service';
import { Student } from './student.schema';

@Controller('student')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Get()
  async getStudents() {
    return this.studentService.getStudent();
  }

  @Get(':id')
  async getStudent(@Param('id') id: string) {
    return this.studentService.getStudentById(id);
  }

  @Post()
  async addStudent(@Body() data: Partial<Student>) {
    return this.studentService.createStudent(data);
  }
}
