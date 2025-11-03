const { where } = require('sequelize');
const db = require('../sequelize/connector');

const Paiement = db.paiement

const addPaiement = async (req, res) => {
    try{
        let info = {
            conducteur_nom: req.body.conducteur_nom,
            montant: req.body.montant,
            date_paiement: req.body.date_paiement,
            tarif_id: req.body.tarif_id,
            poste_id: req.body.poste_id
        }
        const paiement = await Paiement.create(info)
        res.status(200).send({paiement, message:true})
    } catch (error){
        res.status(500).send({message: 'Erreur lors de la creation'})
    }
}

const getPaiement = async(req, res)=>{
    const data =await Paiement.findAll({})
    res.status(200).send(data)
}

module.exports = {
    addPaiement,
    getPaiement
}