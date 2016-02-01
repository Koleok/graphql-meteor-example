export default (sequelize, DataTypes) =>
sequelize.define('reviewers', {
  id: {
    type: DataTypes.INTEGER(11),
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  first_name: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: ''
  },
  last_name: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: ''
  }
}, {
  tableName: 'reviewers',
  freezeTableName: true
});
