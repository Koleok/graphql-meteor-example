export default ({

  // Deps
  GraphQL: {
    types: {
      GraphQLObjectType,
      GraphQLString,
      GraphQLList
    }
  }
}, {

  // Collections
  authors,
  comments
}, {

  // User Types
  Author,
  Comment
}) => {

  return new GraphQLObjectType({
    name: 'BlogPost',
    fields: () => ({
      _id: {
        type: GraphQLString
      },
      title: {
        type: GraphQLString
      },
      content: {
        type: GraphQLString
      },
      author: {
        type: Author,
        resolve: post =>
          authors.findOne({
            _id: post.author
          })
      },
      comments: {
        type: new GraphQLList(Comment),
        resolve: post =>
          comments.find({
            postId: post._id
          }).fetch()
      }
    })
  });
}
