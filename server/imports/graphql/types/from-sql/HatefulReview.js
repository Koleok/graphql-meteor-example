export default ({

  // Deps
  GraphQL: {
    types: {
      GraphQLObjectType,
      GraphQLNonNull,
      GraphQLString,
      GraphQLInt
    }
  }
}, {

  // GraphQL Types
  Reviewer

}) => new GraphQLObjectType({
  name: 'HatefulReview',
  description: 'reviews that are just mean, for no reason',

  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLInt),
      description: 'unique identifier',
      resolve: review => review.id
    },

    text: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'the body of the review',
      resolve: review => review.text
    },

    reviewerId: {
      type: new GraphQLNonNull(GraphQLInt),
      description: 'id of author',
      resolve: review => review.reviewer_id
    },

    reviewer: {
      type: Reviewer,
      description: 'author object',
      resolve: review => review.getReviewer()
    }
  })
});
