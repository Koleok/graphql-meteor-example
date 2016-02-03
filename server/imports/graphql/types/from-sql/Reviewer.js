import Reviews from './Reviews';
const {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLInt
} = GraphQL.types;

export default new GraphQLObjectType({
  name: 'Reviewer',
  description: 'An author who writes reviews',

  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLInt),
      description: 'unique identifier',
      resolve: reviewer => reviewer.id
    },

    name: {
      type: GraphQLString,
      description: 'combined full name of reviewer',
      resolve: reviewer => `${reviewer.first_name} ${reviewer.last_name}`
    },

    firstName: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'first name of reviewer',
      resolve: reviewer => reviewer.first_name
    },

    lastName: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'last name of reviewer',
      resolve: reviewer => reviewer.last_name
    },

    reviews: {
      type: Reviews,
      resolve: reviewer => ({
        unbiased: reviewer.getUnbiasedReviews(),
        hateful: reviewer.getHatefulReviews()
      })
    }
  })
});
