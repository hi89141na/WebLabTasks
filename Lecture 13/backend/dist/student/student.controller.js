"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentController = void 0;
const common_1 = require("@nestjs/common");
const student_service_1 = require("./student.service");
let StudentController = class StudentController {
    constructor(studentService) {
        this.studentService = studentService;
    }
    getAll() {
        return this.studentService.getAll();
    }
    getOne(id) {
        this.studentService.getOne(id);
    }
    saveStudent(name, description) {
        return this.studentService.saveStudent(name, description);
    }
    updateStudent(id, name, description) {
        return this.studentService.updateStudent(id, name, description);
    }
    deleteStudent(id) {
        return this.studentService.deleteStudent(id);
    }
};
exports.StudentController = StudentController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], StudentController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], StudentController.prototype, "getOne", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)('name')),
    __param(1, (0, common_1.Body)('description')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], StudentController.prototype, "saveStudent", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)('name')),
    __param(2, (0, common_1.Body)('description')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String, String]),
    __metadata("design:returntype", void 0)
], StudentController.prototype, "updateStudent", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], StudentController.prototype, "deleteStudent", null);
exports.StudentController = StudentController = __decorate([
    (0, common_1.Controller)('student'),
    __metadata("design:paramtypes", [student_service_1.StudentService])
], StudentController);
//# sourceMappingURL=student.controller.js.map