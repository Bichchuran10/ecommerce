//const path = require('path');

const express = require('express');

//const rootDir = require('../util/path');

const router = express.Router();
const contactuscontroller= require('../controllers/contactus')


router.get('/contactus',contactuscontroller.contactuscontroller)
router.post('/contactus',contactuscontroller.postContactUs)

// router.get('/contactus',(req,res,next)=>{
//     res.sendFile(path.join(rootDir,'views','contact.html'))
//   })

// router.post('/contactus',(req,res,next)=>{
//     console.log(req.body)
//     res.redirect('/success')
//})
module.exports=router;