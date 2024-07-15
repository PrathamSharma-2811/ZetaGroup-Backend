const express = require('express');
const router = express.Router();
const productcontroller = require('../controllers/product')


router.post('/add',productcontroller.createProduct)

router.get('/get',productcontroller.getall)

router.get('/getbyid/:id',productcontroller.getprodbyid)

router.put('/update/:id',productcontroller.updateproduct)

router.delete('/delete/:id',productcontroller.deleteproduct)

module.exports = router;