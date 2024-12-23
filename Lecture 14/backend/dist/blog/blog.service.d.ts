import { Repository } from 'typeorm';
import { Blog } from './blog.entity';
export declare class BlogService {
    private blogRepository;
    constructor(blogRepository: Repository<Blog>);
    getAll(): Promise<Blog[]>;
    getBlogById(id: number): Promise<Blog>;
    saveBlog(title: string, description: string): Promise<Blog>;
    updateBlog(id: number, title: string, description: string): Promise<import("typeorm").UpdateResult>;
    deleteBlog(id: number): Promise<import("typeorm").DeleteResult>;
}
