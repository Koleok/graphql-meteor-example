export default ({

  // Collections
  comments,
  authors,
  posts
}, {

  // Deps
  graphql: {
    types: {
      GraphQLSchema,
      GraphQLObjectType,
      GraphQLString,
      GraphQLList,
      GraphQLNonNull
    }
  }
}, {

  // User Types
  Author,
  Comment,
  BlogPost
}) => {

  const query = new GraphQLObjectType({
    name: 'BlogQueries',
    fields: () => ({

      recentPost: {
        type: BlogPost,
        resolve: () => posts.findOne()
      },

      posts: {
        type: new GraphQLList(BlogPost),
        resolve: () => posts.find().fetch()
      },

      post: {
        type: BlogPost,
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
