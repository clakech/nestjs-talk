import { CFPModule } from 'cfp/cfp.module';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';

@Module({
  imports: [
    CFPModule,
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],
      debug: true,
      playground: true,
    }),
  ],
})
export class AppModule {}
