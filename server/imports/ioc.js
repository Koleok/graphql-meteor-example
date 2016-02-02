/***************************************************
 * Meteor dependencies                             *
 ***************************************************/
import {
  Meteor
}
from 'meteor/meteor';
import {
  DDP
}
from 'meteor/ddp';

/***************************************************
 * Package dependencies for ioc container          *
 ***************************************************/
import _ from 'lodash';
import faker from 'faker2';
import sequelize from 'sequelize';

/***************************************************
 * Export a master object from which any dependant *
 * module can pluck the component it requires      *
 ***************************************************/
export default {
  sequelize,
  GraphQL,
  Meteor,
  Mongo,
  faker,
  DDP,
  _,
};
