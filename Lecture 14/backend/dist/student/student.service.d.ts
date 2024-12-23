import { Repository } from 'typeorm';
import { Student } from './student.entity';
export declare class StudentService {
    private studentRepository;
    constructor(studentRepository: Repository<Student>);
    getAll(): Promise<Student[]>;
}
