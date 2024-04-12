const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

const pathToFile = path.join(__dirname, 'body.html')

app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(__dirname));

app.get('/', (req, res)=>{
res.sendFile(pathToFile);
})

app.post(("/search"), (req, res)=>{
    res.end();
    // res.responseCode(204).end();
});
app.listen(process.env.PORT || 4000);
