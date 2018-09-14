import { graphiqlExpress, graphqlExpress } from 'apollo-server-express';
import { CFPModule } from 'cfp/cfp.module';
import { Module, MiddlewareConsumer, NestModule } from '@nestjs/common';
import { GraphQLModule, GraphQLFactory } from '@nestjs/graphql';

@Module({
  imports: [GraphQLModule, CFPModule],
})
export class AppModule implements NestModule {
  constructor(private readonly graphQLFactory: GraphQLFactory) {}

  configure(consumer: MiddlewareConsumer) {
    const typeDefs = this.graphQLFactory.mergeTypesByPaths('./**/*.graphql');

    const schema = this.graphQLFactory.createSchema({ typeDefs });

    consumer
      .apply(graphiqlExpress({ endpointURL: '/graphql' }))
      .forRoutes('/graphiql')
      .apply(graphqlExpress(req => ({ schema, rootValue: req })))
      .forRoutes('/graphql');
  }
}
