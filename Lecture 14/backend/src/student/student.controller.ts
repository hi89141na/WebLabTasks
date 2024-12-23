import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { StudentService } from './student.service';

@Controller('student')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Get()
  getAll() {
    return this.studentService.getAll();
  }
 
  @Post()
  saveStudent(
    @Body('name') name: string,
    @Body('description') description: string,
  ) {
   // return this.studentService.saveStudent(name, description);
  }

}
