export default ({

  // Deps
  graphql: {
    types: {
      GraphQLObjectType,
      GraphQLString
    }
  }
}, {

  // Collections
  authors
}, {

  // User Types
  Author
}) => {

  return new GraphQLObjectType({
    name: 'Comment',
    fields: () => ({
      _id: {
        type: GraphQLString
      },
      text: {
        type: GraphQLString
      },
      author: {
        type: Author,
        resolve: comment =>
          authors.findOne({
            _id: comment.author
          })
      }
    })
  });
}
