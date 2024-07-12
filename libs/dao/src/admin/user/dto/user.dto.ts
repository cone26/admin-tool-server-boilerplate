import { ApiProperty } from '@dataui/crud/lib/crud';

export class UserDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  password: string;
}
