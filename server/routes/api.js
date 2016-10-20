//create new express router
var express = require('express')
var router = express.Router()
var destinationsController = require('../controllers/destination')

//export router

router.post('/destinations', destinationsController.insert)
router.get('/destinations', destinationsController.displays)
router.get('/destinations/:id', destinationsController.displayOne)
router.put('/destinations/:id', destinationsController.update)
router.delete('/destinations/:id', destinationsController.deleteitem)
router.get('/search/:query', destinationsController.searchDestionation)

module.exports = router
