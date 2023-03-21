const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Expense extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.User, { foreignKey: 'user_id' });
      this.belongsTo(models.Category, { foreignKey: 'category_id' });
    }
  }
  Expense.init({
    title: DataTypes.STRING,
    sum: DataTypes.INTEGER,
    description: DataTypes.TEXT,
    year: DataTypes.INTEGER,
    month: DataTypes.STRING,
    day: DataTypes.INTEGER,
    category_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Expense',
  });
  return Expense;
};
