module.exports = (sequelize, DataTypes) => {
    const Poste = sequelize.define("poste", {
        nom_poste: {
            type: DataTypes.STRING,
            allowNull: false
        },
        agent_nom: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        mot_de_passe: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })
    return Poste
}
