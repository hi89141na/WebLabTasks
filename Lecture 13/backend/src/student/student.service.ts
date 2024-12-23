import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Student } from './student.entity';
@Injectable()
export class StudentService {
    constructor(
        @InjectRepository(Student) 
        private studentRepository: Repository<Student>
    ) {}

    getAll() {
        return this.studentRepository.find();
        
    }
    getOne(id: number) {
        return this.studentRepository.findOne({ where: { id } });
    }
    
    saveStudent(name:string, description:string){
        const student= this.studentRepository.create({
            name:name,
            description:description 
        });
        return this.studentRepository.save(student)

      
    }
    updateStudent(id:number, name:string, description: string){
        return this.studentRepository.update(id, {name:name, description:description});
    }
    deleteStudent(id:number){
        return this.studentRepository.delete(id);
    }
}

