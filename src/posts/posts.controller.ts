import { Crud, CrudController } from '@dataui/crud';
import { PostDto } from '@libs/dao/common/post/dto/post.dto';
import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { PostsService } from './posts.service';
import { Post } from '@libs/dao/common/post/post.entity';

@Controller('posts')
@ApiTags('posts')
@Crud({
  model: { type: Post },
  dto: {
    create: PostDto,
    update: PostDto,
    replace: PostDto,
  },
  serialize: {
    create: PostDto,
    update: PostDto,
    replace: PostDto,
  },
})
export class PostsController implements CrudController<Post> {
  constructor(public service: PostsService) {}
}
