export default ({

  // Deps
  graphql: {
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
