export default ({

  // Collections
  authors,
  comments,
  posts
}, {

  // Deps
  faker,
  _
}) => {

  // Pull the functions we are going to use off of the
  // faker library
  const {
    Company: {
      catchPhrase
    },
    Helpers: {
      randomNumber
    },
    Name: {
      findName
    },
    Lorem: {
      paragraph,
      sentence
    }
  } = faker;

  // // Bootstrap with some dummy data
  if (!authors.findOne()) {

    authors.insert({
      _id: '1',
      name: findName()
    });

    authors.insert({
      _id: '2',
      name: findName()
    });

    _.times(4, index => {
      const postId = randomNumber(),
        commentId = randomNumber();

      posts.insert({
        _id: postId,
        title: catchPhrase(),
        content: paragraph(),
        author: '1'
      });

      comments.insert({
        _id: commentId,
        text: sentence(),
        postId,
        author: '2'
      });
    });
  }

  return (authors.findOne() && posts.findOne() && comments.findOne());

}
