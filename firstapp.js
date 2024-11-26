// const http = require('http');
// const bodyparser = require('body-parser');
const errorController = require('./controllers/error')
const path = require('path')
const express = require('express');
const bodyParser = require('body-parser');
const adminRouts = require('./Routes/admin');
const shopRoutes = require('./Routes/shop')
// const expressHbs = require('express-handlebars');
const app = express();
// const { engine } = require('express-handlebars');
 
// app.engine('hbs',engine({layoutsDir: 'views/layout', defaultLayout: 'main-layout.hbs'}));
app.set('view engine', 'ejs');
// app.engine('handlebars' , expressHbs)
// app.set('view engine' , 'handlebars')
app.set('views' , 'views')

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname , 'public')))
app.use('/admin' , adminData);
app.use(shopRoutes)


app.use(errorController.error)



app.listen(3000)
// console.log(routes.someText);
// const server = http.createServer(app)
// server.listen(6969)
// function requestListner(req , res){
    
// }
// http.createServer(requestListner)
