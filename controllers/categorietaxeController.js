const { where } = require('sequelize');
const db = require('../sequelize/connector');

const CategorieTaxe = db.categorietaxe

const addCategorieTaxe = async (req, res) => {
    try{
        let info = {
            designation: req.body.designation,
            icon_name: req.body.icon_name
        }
        const categorie = await CategorieTaxe.create(info)
        res.status(200).send({categorie, message:true})
    } catch (error){
        res.status(500).send({message: 'Erreur lors de la creation'})
    }
}

const getCategorieTaxe = async(req, res)=>{
    const data =await CategorieTaxe.findAll({})
    res.status(200).send(data)
}

module.exports = {
    addCategorieTaxe,
    getCategorieTaxe
}