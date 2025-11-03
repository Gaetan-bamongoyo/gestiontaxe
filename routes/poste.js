const posteController = require('../controllers/posteController')
const router = require('express').Router()

router.post('/add', posteController.addPoste)
router.post('/login', posteController.verifyPoste)
router.get('/show', posteController.getAll)

module.exports = router