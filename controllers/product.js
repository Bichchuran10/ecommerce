const path = require('path');

const rootDir = require('../util/path');
const Product=require('../models/product')

exports.getAddProduct=(req, res, next) => {
    //const products=Product.fetchAll()
    Product.fetchAll(products=>{
      
    })
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'));

  };

exports.postAddProduct=(req,res,next)=>{
    const product=new Product(req.body.title)
    product.save()
    console.log(req.body);
    res.redirect('/');   
}