/***************************************************
 * Package dependencies for ioc container          *
 ***************************************************/
import graphql from 'graphql';
import faker from 'faker2';
import _ from 'lodash';

/***************************************************
 * Export a master object from which any dependant *
 * module can pluck the component it requires      *
 ***************************************************/
export default {
  graphql,
  Mongo,
  faker,
  _,
};
