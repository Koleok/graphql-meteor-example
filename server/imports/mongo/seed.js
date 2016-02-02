export default ({
  // Deps
  faker,
  _,

  // Collections
  authors,
  comments,
  posts
}) => {

  // Pull the functions we are going to use off of the
  // faker library
  const {
    Company: {
      catchPhrase,
      bs
    },
    Name: {
      findName
    },
    Lorem
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
  }

  if (!posts.findOne()) {
    _.times(4, index => {

      const postId = posts.insert({
        title: catchPhrase(),
        content: Lorem.paragraph(),
        author: '1'
      });

      console.log(postId);

      comments.insert({
        text: bs(),
        postId,
        author: '2'
      });
    });
  }

  // True if there is at least one document in each collection
  return (!!authors.find() && !!posts.findOne() && !!comments.findOne())
};
