const router = require('express').Router();
const controller = require('../controllers/fault.controllers');

router.post('/create', controller.create);
router.get('/get', controller.get);
router.put('/update', controller.update);
rputer.delete('/delete', controller.delete);

module.exports = router
