const express = require("express");
const path = require("path");
const app = express();
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/contactDance', {useNewUrlParse: true});
const port = 8000;

// Define mongoose schema
var contactSchema = new mongoose.Schema({
    name: String,
    phone: String,
    address: String,
    email: String,
    desc: String
});
var Contact = mongoose.model('Contact', contactSchema);


// EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static')) // For serving static files
app.use(express.urlencoded())

// PUG SPECIFIC STUFF
app.set('view engine', 'pug') // Set the template engine as pug
app.set('views', path.join(__dirname, 'views')) // Set the views directory

app.get('/', (req, res)=>{
    const params = {}
    res.status(200).render('index.pug', params);
})

// app.get("/contact", (req, res)=>{ 
//     const params = {}
//     res.status(200).send('contact.pug', params);
// });


// START THE SERVER
app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});