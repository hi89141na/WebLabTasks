import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Blog } from './blog.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class BlogService {
    constructor(
        @InjectRepository(Blog)
        private blogRepository: Repository<Blog>) { }
    getAll() {
        return this.blogRepository.find();
    }
    getBlogById(id: number) {
        return this.blogRepository.findOne({ where: { id } });
    }
    saveBlog(title: string, description: string) {
        const blog = this.blogRepository.create({
            title: title,
            description: description,
        });
        return this.blogRepository.save(blog);
    }
    updateBlog(id: number, title: string, description: string) {
        return this.blogRepository.update(id, { title: title, description: description });
    }
    deleteBlog(id: number) {
        return this.blogRepository.delete(id);
    }
}
