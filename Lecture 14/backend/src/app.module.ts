import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BlogModule } from './blog/blog.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'week14',
      entities: [__dirname + '/**/*.entity{.ts,.js}'], 
      synchronize: true, 
    }),
    BlogModule,
    
  ],
})
export class AppModule {}
