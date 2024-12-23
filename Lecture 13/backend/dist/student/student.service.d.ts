import { Repository } from 'typeorm';
import { Student } from './student.entity';
export declare class StudentService {
    private studentRepository;
    constructor(studentRepository: Repository<Student>);
    getAll(): Promise<Student[]>;
    getOne(id: number): Promise<Student>;
    saveStudent(name: string, description: string): Promise<Student>;
    updateStudent(id: number, name: string, description: string): Promise<import("typeorm").UpdateResult>;
    deleteStudent(id: number): Promise<import("typeorm").DeleteResult>;
}
