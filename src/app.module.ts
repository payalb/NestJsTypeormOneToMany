import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver } from '@nestjs/apollo';
import { UserModule } from './user/user.module';
import { User } from './user/entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostModule } from './post/post.module';
import { Post } from './post/entities/post.entity';


@Module({
  imports: [GraphQLModule.forRoot({
  autoSchemaFile: "schema.gql", 
  sortSchema: true, 
  driver: ApolloDriver
    }), UserModule, 
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: "localhost",
      port: 5432,
      database: "postgres",
      username: "postgres",
      password: "postgres",
      entities: [User, Post],
      logging: true,
      synchronize: true
    }), PostModule,
  ],
  providers: [AppService, AppController],
})
export class AppModule{
//  configure(consumer: MiddlewareConsumer) {
  //    consumer.apply(LoggerMiddleware).forRoutes("*")
  //}
}
