import deps from './ioc';

import collectionsBuilder from './mongo/collections';
import seeder from './mongo/seed';

import schemaBuilder from './graphql/schema';
import mongoTypeBuilder from './graphql/types/from-mongo/types';

import sqlConnectionBuilder from './sql/connection';
import sqlModelBuilder from './sql/models';
import sqlTypeBuilder from './graphql/types/from-sql/types';

const mongoCollections = collectionsBuilder(deps),

  dataReady = seeder({
    ...mongoCollections,
    ...deps
  }),

  mongoTypes = mongoTypeBuilder({
    collections: mongoCollections,
    deps
  });

const sqlConnection = sqlConnectionBuilder(deps),

  sqlModels = sqlModelBuilder({
    connection: sqlConnection,
    ...deps
  }),

  sqlTypes = sqlTypeBuilder(deps);

const schema = schemaBuilder({
  ...deps,
  ...sqlTypes,
  ...sqlModels,
  ...mongoTypes,
  ...mongoCollections
});

if (dataReady) {

}
