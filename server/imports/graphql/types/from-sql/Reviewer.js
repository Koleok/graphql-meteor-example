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
}) => new GraphQLObjectType({
  name: 'Reviewer',
  description: 'An author who writes reviews',

  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLInt),
      description: 'unique identifier',
      resolve: reviewer => reviewer.id
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
    }
  })
});
