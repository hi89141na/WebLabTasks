import { Controller, Body, Param, Get, Post, Put, Delete } from '@nestjs/common';
import { BlogService } from './blog.service'
@Controller('blog')
export class BlogController {
    constructor(private readonly blogService: BlogService) { }
    @Get()
    getAll() {
        return this.blogService.getAll();
    }
    @Get(':id')
    getBlogById(@Param('id') id: number) {
        return this.blogService.getBlogById(id);
    }
    @Post()
    saveBlog(@Body('title') title: string,
        @Body('description') description: string) {
        return this.blogService.saveBlog(title, description);
    }
    @Put(':id')
    updateBlog(@Param('id') id: number, @Body('title') title: string, @Body
        ('description') description: string) {
        return this.blogService.updateBlog(id, title, description);
    }
    @Delete(":id")
    deleteBlog(@Param('id') id: number) {
        return this.blogService.deleteBlog(id);
    }

}
