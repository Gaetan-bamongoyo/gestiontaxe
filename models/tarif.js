module.exports = (sequelize, DataTypes) => {
  const Tarif = sequelize.define("tarif", {
    nom: { type: DataTypes.STRING, allowNull: false },
    tarif: { type: DataTypes.FLOAT, allowNull: false, defaultValue: 0.0 },
    icon_name: { type: DataTypes.STRING, allowNull: false }
  })
  return Tarif
}