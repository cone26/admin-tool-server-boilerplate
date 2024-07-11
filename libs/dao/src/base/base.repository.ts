import { Repository } from 'typeorm';
import { getCustomRepository } from '@libs/common/database/typeorm/typeorm-ex.module';
import { ClassConstructor } from 'class-transformer';

export abstract class BaseRepository<Entity> extends Repository<Entity> {
  protected readonly alias: string = this.metadata.tableName;

  static instance<T>(this: ClassConstructor<T>, database: string): T {
    return getCustomRepository(this, database);
  }
}
