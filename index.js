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

app.get('/pitagora',(req, res) =>{
    res.sendFile(path.join(__dirname, 'files/pages/pitagora.html'));
})
app.get('/esercizi',(req, res) =>{
    res.sendFile(path.join(__dirname, 'files/pages/esercizipitagora.html'));
})


//static files css
app.get('/icss',(req, res) =>{
    res.sendFile(path.join(__dirname, 'files/style/index.css'));
})
app.get('/navbar',(req, res) =>{
    res.sendFile(path.join(__dirname, 'files/component/nav.html'));
})

app.get('/navJS',(req, res) =>{
    res.sendFile(path.join(__dirname, 'files/script/includeHtml.js'));
})
app.get('/esp',(req, res) =>{
    res.sendFile(path.join(__dirname, 'files/script/espitagora.js'));
})

// static img file

app.get('/logo',(req, res) =>{
    res.sendFile(path.join(__dirname, 'files/img/logo.png'));
})
app.get('/imgp2',(req, res) =>{
    res.sendFile(path.join(__dirname, 'files/img/soffice.bin_KEJCA5VLiN.png'));
})
app.get('/imgp3',(req, res) =>{
    res.sendFile(path.join(__dirname, 'files/img/qadrato.png'));
})

app.get('/imgp4', (req, res) =>{
    res.sendFile(path.join(__dirname, 'files/img/rettangolo.png'));
})
app.get('/imgp5', (req, res) =>{
    res.sendFile(path.join(__dirname, 'files/img/trapezio.png'));
})
app.get('/imgp6', (req, res) =>{
    res.sendFile(path.join(__dirname, 'files/img/trapezio_rettangolo.png'));
})
app.get('/imgp7', (req, res) =>{
    res.sendFile(path.join(__dirname, 'files/img/trapezio_isoscele.png'));
})
app.get('/imgp8', (req, res) =>{
    res.sendFile(path.join(__dirname, 'files/img/triangolo_isoscele.png'));
})
app.get('/imgp9', (req, res) =>{
    res.sendFile(path.join(__dirname, 'files/img/triangolo_equilatero.png'));
})
app.get('/imgp10', (req, res) =>{
    res.sendFile(path.join(__dirname, 'files/img/cerchio2.png'));
})

