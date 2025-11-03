const tarifController = require('../controllers/tarifController')
const router = require('express').Router()

router.post('/add', tarifController.addTarif)
router.get('/show', tarifController.getTarif)

module.exports = router