export default ({

  // Deps
  GraphQL: {
    types: {
      GraphQLObjectType,
      GraphQLString
    }
  }
}) => {

  return new GraphQLObjectType({
    name: 'Author',
    fields: () => ({
      _id: {
        type: GraphQLString
      },
      name: {
        type: GraphQLString
      }
    })
  });
}
