
const express = require('express');

const router = express.Router();

const productController=require('../controllers/product')


// /admin/add-product => GET

router.get('/add-product',productController.getAddProduct)
router.post('/add-product',productController.postAddProduct)
// router.get('/add-product', (req, res, next) => {
//   res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
// });

// // /admin/add-product => POST
// router.post('/add-product', (req, res, next) => {
//   console.log(req.body);
//   res.redirect('/');
// });

module.exports = router;
