import AuthorFactory from './Author';
import CommentFactory from './Comment';
import BlogPostFactory from './BlogPost';

export default (collections, deps) => {
  const Author = AuthorFactory(deps),

    Comment = CommentFactory(deps, collections, {
      Author
    }),

    BlogPost = BlogPostFactory(deps, collections, {
      Author,
      Comment
    });

  return {
    Author,
    Comment,
    BlogPost
  }
}
