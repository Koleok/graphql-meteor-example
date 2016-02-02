export default ({

  // Sequelize Types
  sequelize: {
    INTEGER,
    TEXT
  },

  // Db connection
  connection

}) => {

  return connection.define(
    'hateful_reviews', {
      id: {
        type: INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      text: {
        type: TEXT,
        allowNull: false
      },
      reviewer_id: {
        type: INTEGER(11),
        allowNull: false,
        references: {
          model: 'reviewers',
          key: 'id'
        }
      }
    }, {
      tableName: 'hateful_reviews',
      freezeTableName: true
    });
}