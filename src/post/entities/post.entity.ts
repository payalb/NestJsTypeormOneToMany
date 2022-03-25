import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { User } from '../../user/entities/user.entity';
import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export class Post extends BaseEntity{
  @PrimaryGeneratedColumn()
  @Field(()=> ID)
  id: number
  @Field(() => Int, { description: 'Example field (placeholder)', nullable: true })
  @Column({nullable: true})
  exampleField?: number;
  @ManyToOne(()=> User, user => user.posts, { cascade: true})
  @JoinColumn({name: "user_id", referencedColumnName: "id"})
  @Field(()=> User)
  user!: User
  @Field(()=> Int)
  user_id?: number
}
