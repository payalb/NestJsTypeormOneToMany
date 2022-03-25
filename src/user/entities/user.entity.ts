import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { Post } from '../../post/entities/post.entity';
import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export class User extends BaseEntity{
  @Field(()=> ID,)
  @PrimaryGeneratedColumn()
  id: number
  @Field(() => Int, { description: 'Example field (placeholder)' , nullable: true})
  @Column({nullable: true})
  exampleField: number;
  @Field(()=> [Post])
  @OneToMany(()=> Post, post => post.user)
  posts: Post[]
}
