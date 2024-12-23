import { StudentService } from './student.service';
export declare class StudentController {
    private readonly studentService;
    constructor(studentService: StudentService);
    getAll(): Promise<import("./student.entity").Student[]>;
    saveStudent(name: string, description: string): void;
}
