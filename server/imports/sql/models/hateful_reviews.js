export default (sequelize, DataTypes) =>
sequelize.define('hateful_reviews', {
  id: {
    type: DataTypes.INTEGER(11),
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  text: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  reviewer_id: {
    type: DataTypes.INTEGER(11),
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
