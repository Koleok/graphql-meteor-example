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
  name: 'UnbiasedReview',
  description: 'reviews that are neutral in tone',

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

    post: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'id of the post this review refers to'
    },

    reviewer: {
      type: Reviewer,
      description: 'author object',
      resolve: review => review.getReviewer()
    }
  })
});
