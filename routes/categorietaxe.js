const categorietaxeController = require('../controllers/categorietaxeController')
const router = require('express').Router()

router.post('/add', categorietaxeController.addCategorieTaxe)
router.get('/show', categorietaxeController.getCategorieTaxe)

module.exports = router