import { BlogService } from './blog.service';
export declare class BlogController {
    private readonly blogService;
    constructor(blogService: BlogService);
    getAll(): Promise<import("./blog.entity").Blog[]>;
    getBlogById(id: number): Promise<import("./blog.entity").Blog>;
    saveBlog(title: string, description: string): Promise<import("./blog.entity").Blog>;
    updateBlog(id: number, title: string, description: string): Promise<import("typeorm").UpdateResult>;
    deleteBlog(id: number): Promise<import("typeorm").DeleteResult>;
}
