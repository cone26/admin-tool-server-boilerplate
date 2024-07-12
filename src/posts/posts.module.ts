import commonDatabseConfig from '@libs/dao/config/common/common-databse.config';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Post } from '@libs/dao/common/post/post.entity';
import { PostsController } from './posts.controller';
import { PostsService } from './posts.service';

@Module({
  imports: [TypeOrmModule.forFeature([Post], commonDatabseConfig().name)],
  controllers: [PostsController],
  providers: [PostsService],
  exports: [TypeOrmModule],
})
export class PostsModule {}
