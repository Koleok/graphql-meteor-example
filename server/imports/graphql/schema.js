export default ({

  // Collections
  comments,
  authors,
  posts,

  // Sql Models
  reviewers,
  hatefulReviews,
  unbiasedReviews,

  // Sql GraphQL Types
  Reviewer,
  HatefulReview,
  UnbiasedReview,

  // Mongo GraphQL Types
  Author,
  Comment,
  BlogPost,

  // Deps
  GraphQL: {
    types: {
      GraphQLSchema,
      GraphQLObjectType,
      GraphQLString,
      GraphQLList,
      GraphQLNonNull
    }
  }
}) => {

  const query = new GraphQLObjectType({
    name: 'BlogQueries',
    fields: () => ({

      recentPost: {
        type: BlogPost,
        description: 'A post that was published in the last day',
        resolve: () => posts.findOne()
      },

      posts: {
        type: new GraphQLList(BlogPost),
        description: 'An unfiltered list of all posts',
        resolve: () => posts.find().fetch()
      },

      post: {
        type: BlogPost,
        description: 'A query that requires an id parameter to retrieve a single specific post',
        args: {
          _id: {
            type: new GraphQLNonNull(GraphQLString)
          }
        },
        resolve: (root, args) =>
          posts.findOne({
            _id: args._id
          })
      }
    })
  });

  const mutation = new GraphQLObjectType({
    name: 'BlogMutations',
    fields: () => ({

      addPost: {
        type: BlogPost,
        args: {
          _id: {
            type: new GraphQLNonNull(GraphQLString)
          },
          title: {
            type: new GraphQLNonNull(GraphQLString)
          },
          content: {
            type: new GraphQLNonNull(GraphQLString)
          },
          author: {
            type: new GraphQLNonNull(GraphQLString)
          }
        },
        resolve(root, args) {
          posts.insert(args);
          return args;
        }
      },

      reset: {
        type: GraphQLString,
        resolve(root, args, {
          rootValue
        }) {
          if (!rootValue.userId) {
            // if this is not a loggedIn user
            throw new Error("Unauthorized");
          }
          posts.remove({});
          comments.remove({});
        }
      }
    })
  });

  return new GraphQLSchema({
    query,
    mutation
  });
}
