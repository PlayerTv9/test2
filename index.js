import express from 'express';
import bodyParser from 'body-parser';
import path from 'path'
const app = express();
app.use(bodyParser.json());
app.get('/',(req,res) => {
    res.sendFile(path.join(__dirname, '/index.html'));
})
app.get('/home',(req,res) => {
    res.sendFile(path.join(__dirname, '/index.html'));
})
app.get('/cane',(req,res) => {
    res.sendFile(path.join(__dirname, '/cane.html'));
})
app.listen(5000,() => {
     console.log(`app is listening to port http://localhost:5000`);
})