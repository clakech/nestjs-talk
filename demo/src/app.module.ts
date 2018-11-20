import { CFPModule } from 'cfp/cfp.module';
import { Module, MiddlewareConsumer, NestModule } from '@nestjs/common';
import { GraphQLModule, GraphQLFactory } from '@nestjs/graphql';

@Module({
  imports: [
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],
      debug: true,
      playground: true,
      introspection: true,
      context: ({ req }) => ({
        request: req,
      }),
    }),
    CFPModule,
  ],
})
export class AppModule {}
