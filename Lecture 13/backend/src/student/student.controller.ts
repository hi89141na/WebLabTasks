import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { StudentService } from './student.service';

@Controller('student')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Get()
  getAll() {
    return this.studentService.getAll();
  }
  @Get(':id')
  getOne(@Param('id') id: number){
    this.studentService.getOne(id);
  }
  @Post()
  saveStudent(
    @Body('name') name: string,
    @Body('description') description: string,
  ) {
    return this.studentService.saveStudent(name, description);
  }

  @Put(':id')
  updateStudent(
    @Param('id') id: number,
    @Body('name') name: string,
    @Body('description') description: string,
  ) {
    return this.studentService.updateStudent(id, name, description);
  }
  @Delete(':id')
  deleteStudent(@Param('id') id:number){
    return this.studentService.deleteStudent(id);
  }
}
