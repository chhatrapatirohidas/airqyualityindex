const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 5000;

app.use(express.json());

const static_path = path.join(__dirname, "client");

app.use(express.static(static_path));

app.use('/', (req,res) =>{
    res.sendFile(path.join(__dirname + 'client/index.html'));
})

 app.listen(port, ()=>{
     console.log(`Server Satrted in ${port}`);
 })