import { EntityRepository } from '@libs/common/database/typeorm/typeorm-ex.decorator';
import { AbstractRepository } from '@libs/common/database/abstract.respository';
import { Post } from './post.entity';

@EntityRepository(Post)
export class PostsRepository extends AbstractRepository<Post> {}
