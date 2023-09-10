var express = require('express')
var router = express.Router()

var event_controller = require('../controllers/event')

router.get('/', event_controller.event_list)

router.post('/', event_controller.event_create)

router.get('/:id', event_controller.event_details)

router.put('/:id', event_controller.event_update)

module.exports = router
