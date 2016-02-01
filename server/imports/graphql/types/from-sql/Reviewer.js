import getEntityResolver from '../util/entity-resolver';
import {
  getType, registerType
}
from '../resolve-map';
import {
  GraphQLObjectType, GraphQLInt, GraphQLNonNull, GraphQLString
}
from 'graphql';

const ReviewerType = new GraphQLObjectType({
  name: 'Reviewer',
  description: '@TODO DESCRIBE ME',

  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLInt),
      description: '@TODO DESCRIBE ME'
    },

    firstName: {
      type: new GraphQLNonNull(GraphQLString),
      description: '@TODO DESCRIBE ME'
    },

    lastName: {
      type: new GraphQLNonNull(GraphQLString),
      description: '@TODO DESCRIBE ME'
    }
  })
});

registerType(ReviewerType);
export default ReviewerType;
