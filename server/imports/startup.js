import deps, {
  faker,
  _
}
from './ioc';
import buildCollections from './collections';
import seeder from './seed';

const collections = buildCollections(deps),
  dataReady = seeder(collections, deps);

console.log(dataReady);
