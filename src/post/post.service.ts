import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePostInput } from './dto/create-post.input';
import { UpdatePostInput } from './dto/update-post.input';
import { Post } from './entities/post.entity';

@Injectable()
export class PostService {

  constructor(@InjectRepository(Post) private readonly postRepo: Repository<Post>){

  }
  create(createPostInput: CreatePostInput) {
    return this.postRepo.save(createPostInput);
  }

  findAll() {
    return this.postRepo.find({relations: ["user"]});
  }

  findOne(id: number) {
    return this.postRepo.findOne(id, {relations: ["user"]});
  }

  update(id: number, updatePostInput: UpdatePostInput) {
    return `This action updates a #${id} post`;
  }

  remove(id: number) {
    return `This action removes a #${id} post`;
  }
}
