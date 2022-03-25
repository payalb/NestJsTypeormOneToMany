import { InputType, Int, Field } from '@nestjs/graphql';
import { CreateUserInput } from 'src/user/dto/create-user.input';
import { UpdateUserInput } from 'src/user/dto/update-user.input';
import { User } from 'src/user/entities/user.entity';

@InputType()
export class CreatePostInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
  @Field(()=> UpdateUserInput, {nullable: true})
  user?: User
  @Field(()=> Int, {nullable: true})
  user_id?: number
}
