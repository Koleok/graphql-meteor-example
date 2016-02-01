import getEntityResolver from '../util/entity-resolver';
import {
  getType, registerType
}
from '../resolve-map';
import {
  GraphQLObjectType, GraphQLInt, GraphQLNonNull, GraphQLString
}
from 'graphql';

const HatefulReviewType = new GraphQLObjectType({
  name: 'HatefulReview',
  description: '@TODO DESCRIBE ME',

  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLInt),
      description: '@TODO DESCRIBE ME'
    },

    text: {
      type: new GraphQLNonNull(GraphQLString),
      description: '@TODO DESCRIBE ME'
    },

    reviewerId: {
      type: new GraphQLNonNull(GraphQLInt),
      description: '@TODO DESCRIBE ME'
    },

    reviewer: {
      type: getType('Reviewer'),
      description: '@TODO DESCRIBE ME (reference)',
      resolve: getEntityResolver('Reviewer')
    }
  })
});

registerType(HatefulReviewType);
export default HatefulReviewType;
