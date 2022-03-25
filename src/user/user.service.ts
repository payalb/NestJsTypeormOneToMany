import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {

  constructor(@InjectRepository(User)private  userRepo: Repository<User>){

  }
  create(createUserInput: CreateUserInput) {
    return this.userRepo.save(createUserInput)
  }

  /**
   * 
   *  query{
    users{
        id
        exampleField
        posts{
            id
        }
    }
}
   */
  findAll() : Promise<User[]>{
    return this.userRepo.find({relations:["posts"]})
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserInput: UpdateUserInput) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
