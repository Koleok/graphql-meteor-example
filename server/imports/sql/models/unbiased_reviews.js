export default ({

  // Sequelize Types
  sequelize: {
    INTEGER,
    STRING,
    TEXT
  },

  // Db connection
  connection

}) => {

  return connection.define(
    'unbiased_reviews', {
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

      post_id: {
        type: STRING,
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
      tableName: 'unbiased_reviews',
      freezeTableName: true
    });

}
