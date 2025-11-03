const paiementController = require('../controllers/paiementController')
const router = require('express').Router()

router.post('/add', paiementController.addPaiement)
router.get('/show', paiementController.getPaiement)

module.exports = router