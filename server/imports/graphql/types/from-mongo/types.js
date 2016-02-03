import AuthorFactory from './Author';
import CommentFactory from './Comment';
import BlogPostFactory from './BlogPost';

export default ({
  mongoCollections,
  sqlModels,
  sqlTypes,
  deps
}) => {

  const Author = AuthorFactory(deps),

    Comment = CommentFactory(
      deps,
      mongoCollections, {
        Author
      }),

    BlogPost = BlogPostFactory(
      deps,
      sqlModels,
      sqlTypes,
      mongoCollections, {
        Author,
        Comment
      });

  return {
    Author,
    Comment,
    BlogPost
  }
}
