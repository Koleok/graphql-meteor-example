export default ({

  // Sequelize Types
  sequelize: {
    INTEGER,
    STRING
  },

  // Db connection
  connection

}) => {

  return connection.define(
    'reviewers', {
      id: {
        type: INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      first_name: {
        type: STRING,
        allowNull: false,
        defaultValue: ''
      },
      last_name: {
        type: STRING,
        allowNull: false,
        defaultValue: ''
      }
    }, {
      tableName: 'reviewers',
      freezeTableName: true
    });
}
