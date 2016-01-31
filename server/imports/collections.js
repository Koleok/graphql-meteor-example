export default ({
  Mongo,
  _
}) => ({
  authors: new Mongo.Collection('authors'),
  posts: new Mongo.Collection('posts'),
  comments: new Mongo.Collection('comments')
});
