import { StudentService } from './student.service';
export declare class StudentController {
    private readonly studentService;
    constructor(studentService: StudentService);
    getAll(): Promise<import("./student.entity").Student[]>;
    getOne(id: number): void;
    saveStudent(name: string, description: string): Promise<import("./student.entity").Student>;
    updateStudent(id: number, name: string, description: string): Promise<import("typeorm").UpdateResult>;
    deleteStudent(id: number): Promise<import("typeorm").DeleteResult>;
}
