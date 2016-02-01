import getEntityResolver from './util/entity-resolver';
import {
  GraphQLObjectType, GraphQLSchema, GraphQLNonNull, GraphQLInt
}
from 'graphql';
import ReviewerType from './types/ReviewerType';
import HatefulReviewType from './types/HatefulReviewType';
import UnbiasedReviewType from './types/UnbiasedReviewType';
import {
  registerType
}
from './resolve-map';
import * as types from './types';

var schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQueryType',

    fields: () => ({
      reviewer: {
        type: ReviewerType,
        args: {
          id: {
            name: 'id',
            type: new GraphQLNonNull(GraphQLInt)
          }
        },

        resolve: getEntityResolver('Reviewer')
      },

      hatefulReview: {
        type: HatefulReviewType,
        args: {
          id: {
            name: 'id',
            type: new GraphQLNonNull(GraphQLInt)
          }
        },

        resolve: getEntityResolver('HatefulReview')
      },

      unbiasedReview: {
        type: UnbiasedReviewType,
        args: {
          id: {
            name: 'id',
            type: new GraphQLNonNull(GraphQLInt)
          }
        },

        resolve: getEntityResolver('UnbiasedReview')
      }
    })
  })
});

module.exports = schema;
