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
exports.BlogService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const blog_entity_1 = require("./blog.entity");
const typeorm_2 = require("@nestjs/typeorm");
let BlogService = class BlogService {
    constructor(blogRepository) {
        this.blogRepository = blogRepository;
    }
    getAll() {
        return this.blogRepository.find();
    }
    getBlogById(id) {
        return this.blogRepository.findOne({ where: { id } });
    }
    saveBlog(title, description) {
        const blog = this.blogRepository.create({
            title: title,
            description: description,
        });
        return this.blogRepository.save(blog);
    }
    updateBlog(id, title, description) {
        return this.blogRepository.update(id, { title: title, description: description });
    }
    deleteBlog(id) {
        return this.blogRepository.delete(id);
    }
};
exports.BlogService = BlogService;
exports.BlogService = BlogService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(blog_entity_1.Blog)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], BlogService);
//# sourceMappingURL=blog.service.js.map