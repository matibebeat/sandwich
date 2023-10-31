const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');

const stuffCtrl = require('../controllers/sandwichs');
console.log(router);

router.get('/', stuffCtrl.getAllSandwichs);
router.post('/', auth, stuffCtrl.createSandwich);
router.get('/:id', auth, stuffCtrl.getOneSandwich);
router.put('/:id', auth, stuffCtrl.modifySandwich);
router.delete('/:id', auth, stuffCtrl.deleteSandwich);

module.exports = router;