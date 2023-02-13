const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const contactRoutes=require('./routes/contact')
const successRoute=require('./routes/success')
const errorController=require('./controllers/error')

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname,'public')))

app.use('/admin', adminRoutes);
app.use(shopRoutes);
app.use(contactRoutes)
app.use(successRoute)


// app.use((req, res, next) => {
//     res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
// });
app.use(errorController.get404)

app.listen(4000);
