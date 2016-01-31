/***************************************************
 * Package dependencies for ioc container          *
 ***************************************************/
import _ from 'lodash';
import faker from 'faker2';

/***************************************************
 * Export a master object from which any dependant *
 * module can pluck the component it requires      *
 ***************************************************/
export default {
  GraphQL,
  Mongo,
  faker,
  _,
};
