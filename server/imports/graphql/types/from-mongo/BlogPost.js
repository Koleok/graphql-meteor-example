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

  // Sql Models
  unbiasedReviews,
  hatefulReviews,
  reviewers
}, {

  // Sql GraphQL Types
  Reviews
}, {

  // Mongo Collections
  authors,
  comments
}, {

  // Mongo GraphQL Types
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
      },

      reviews: {
        type: Reviews,
        resolve: post => {
          const query = {
            where: {
              post_id: post._id
            }
          };

          return {
            unbiased: unbiasedReviews.findAll(query),
            hateful: hatefulReviews.findAll(query)
          };
        }
      },

    })
  });
}
