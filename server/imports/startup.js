import deps from './ioc';

import collectionsBuilder from './mongo/collections';
import seeder from './mongo/seed';

import schemaBuilder from './graphql/schema';
import mongoTypeBuilder from './graphql/types/from-mongo/types';

import sqlConnectionBuilder from './sql/connection';
import sqlModelBuilder from './sql/models';
import sqlTypes from './graphql/types/from-sql/types';

const sqlConnection = sqlConnectionBuilder(deps),

  sqlModels = sqlModelBuilder({
    connection: sqlConnection,
    ...deps
  });

const mongoCollections = collectionsBuilder(deps),

  dataReady = seeder({
    ...mongoCollections,
    ...deps
  }),

  mongoTypes = mongoTypeBuilder({
    mongoCollections,
    sqlModels,
    sqlTypes,
    deps
  });

const schema = schemaBuilder({
  ...deps,
  ...sqlTypes,
  ...sqlModels,
  ...mongoTypes,
  ...mongoCollections
});

deps.GraphQL.registerSchema('Blog', schema);

if (dataReady) {

}
