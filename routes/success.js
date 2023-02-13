//const path = require('path');

const express = require('express');

//const rootDir = require('../util/path');

const router = express.Router();
const successController=require('../controllers/success')
router.get('/success',successController.getSuccessPage)

//router.get('/success',(req,res,next)=>{
   // res.sendFile(path.join(rootDir,'views','success.html'))
   //})
// router.post('/success',(req,res,next)=>{
//     res.redirect('/success')
//   })

module.exports=router