module.exports = (sequelize, DataTypes) => {
    const Paiement = sequelize.define("paiement", {
        conducteur_nom: { type: DataTypes.STRING, allowNull: false },
        montant: { type: DataTypes.FLOAT, allowNull: false },
        date_paiement: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW }
    })
    return Paiement
}