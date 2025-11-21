const { where } = require('sequelize');
const db = require('../sequelize/connector');

const Tarif = db.tarif

const addTarif = async (req, res) => {
    try{
        let info = {
            nom: req.body.nom,
            tarif: req.body.tarif,
            icon_name: req.body.icon_name,
            categorie_taxe: req.body.categorie_taxe
        }
        const tarif = await Tarif.create(info)
        res.status(200).send({tarif, message:true})
    } catch (error){
        res.status(500).send({message: 'Erreur lors de la creation'})
    }
}

const getTarif = async(req, res)=>{
    const data =await Tarif.findAll({})
    res.status(200).send(data)
}

module.exports = {
    addTarif,
    getTarif
}