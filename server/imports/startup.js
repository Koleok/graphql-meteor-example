import deps from './ioc';

import collectionsBuilder from './mongo/collections';
import seeder from './mongo/seed';

import schemaBuilder from './graphql/schema';
import typebuilder from './graphql/types/types';

const collections = collectionsBuilder(deps),
  dataReady = seeder(collections, deps);

const types = typebuilder(collections, deps),
  schema = schemaBuilder(collections, deps, types);

if (dataReady) {

}
