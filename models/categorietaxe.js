module.exports = (sequelize, DataTypes) => {
  const CategorieTaxe = sequelize.define("categorietaxe", {
    designation: { type: DataTypes.STRING, allowNull: false },
    icon_name: { type: DataTypes.STRING, allowNull: false }
  })
  return CategorieTaxe
}