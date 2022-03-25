
import { Resolver,Query } from '@nestjs/graphql';
import { AppService } from './app.service';

@Resolver()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Query(()=> String)
  getHello(): string {
    return this.appService.getHello();
  }
}
