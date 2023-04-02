"use strict";

var _express = _interopRequireDefault(require("express"));
var _bodyParser = _interopRequireDefault(require("body-parser"));
var _path = _interopRequireDefault(require("path"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var app = (0, _express["default"])();
app.use(_bodyParser["default"].json());
app.get('/', function (req, res) {
  res.sendFile(_path["default"].join(__dirname, '/index.html'));
});
app.get('/home', function (req, res) {
  res.sendFile(_path["default"].join(__dirname, '/index.html'));
});
app.get('/cane', function (req, res) {
  res.sendFile(_path["default"].join(__dirname, '/cane.html'));
});
app.listen(5000, function () {
  console.log("app is listening to port http://localhost:5000");
});
app.get('/pitagora', function (req, res) {
  res.sendFile(_path["default"].join(__dirname, '/pitagora.html'));
});
app.get('/esercizi', function (req, res) {
  res.sendFile(_path["default"].join(__dirname, '/esercizipitagora.html'));
});

//static files css
app.get('/icss', function (req, res) {
  res.sendFile(_path["default"].join(__dirname, '/index.css'));
});
app.get('/navbar', function (req, res) {
  res.sendFile(_path["default"].join(__dirname, '/nav.html'));
});
app.get('/navJS', function (req, res) {
  res.sendFile(_path["default"].join(__dirname, '/includeHtml.js'));
});
app.get('/esp', function (req, res) {
  res.sendFile(_path["default"].join(__dirname, '/espitagora.js'));
});

// static img file

app.get('/logo', function (req, res) {
  res.sendFile(_path["default"].join(__dirname, 'files/img/logo.png'));
});
app.get('/imgp2', function (req, res) {
  res.sendFile(_path["default"].join(__dirname, 'files/img/soffice.bin_KEJCA5VLiN.png'));
});
app.get('/imgp3', function (req, res) {
  res.sendFile(_path["default"].join(__dirname, 'files/img/qadrato.png'));
});
app.get('/imgp4', function (req, res) {
  res.sendFile(_path["default"].join(__dirname, 'files/img/rettangolo.png'));
});
app.get('/imgp5', function (req, res) {
  res.sendFile(_path["default"].join(__dirname, 'files/img/trapezio.png'));
});
app.get('/imgp6', function (req, res) {
  res.sendFile(_path["default"].join(__dirname, 'files/img/trapezio_rettangolo.png'));
});
app.get('/imgp7', function (req, res) {
  res.sendFile(_path["default"].join(__dirname, 'files/img/trapezio_isoscele.png'));
});
app.get('/imgp8', function (req, res) {
  res.sendFile(_path["default"].join(__dirname, 'files/img/triangolo_isoscele.png'));
});
app.get('/imgp9', function (req, res) {
  res.sendFile(_path["default"].join(__dirname, 'files/img/triangolo_equilatero.png'));
});
