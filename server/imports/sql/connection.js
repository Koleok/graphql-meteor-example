export default ({
  sequelize
}) => new sequelize('reviews', 'root', 'password', {
  dialect: 'mysql',
  host: 'dockerhost',
  port: 3306,
});
