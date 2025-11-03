const db = require('../sequelize/connector')

const Poste = db.poste

const addPoste = async (req, res) => {
    const { nom_poste } = req.body;
    const check = await Poste.findOne({ where: { nom_poste } });
    let info = {
        nom_poste: req.body.nom_poste,
        agent_nom: req.body.agent_nom,
        mot_de_passe: req.body.mot_de_passe,
    }
    if (check) {
        res.status(401).send({ error: "Le compte existe deja" })
    } else {
        const poste = await Poste.create(info)
        res.status(200).send({ poste, message: true })
    }
}

const verifyPoste = async (req, res) => {
    const { nom_poste, mot_de_passe } = req.body;
    if (!nom_poste) {
        return res.status(400).send([]) 
    } else {
        try {
            const poste = await Poste.findOne({ where: { nom_poste, mot_de_passe } });
            if (poste) {
                res.status(200).send({ poste, message: true })
            } else {
                res.status(401).send({ error: "Utilisateur n'existe" })
            }
        } catch (error) {
            res.status(500).send({ error: "Erreur" })
        }
    }
}


const getAll = async (req, res) => {
    const data = await Poste.findAll({})
    res.status(200).send(data)
}

module.exports = {
    getAll,
    addPoste,
    verifyPoste
}