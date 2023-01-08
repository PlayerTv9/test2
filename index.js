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
  res.sendFile(_path["default"].join(__dirname, 'files/pages/pitagora.html'));
});

//static files css
app.get('/icss', function (req, res) {
  res.sendFile(_path["default"].join(__dirname, 'files/style/index.css'));
});
app.get('/navbar', function (req, res) {
  res.sendFile(_path["default"].join(__dirname, 'files/component/nav.html'));
});
app.get('/navJS', function (req, res) {
  res.sendFile(_path["default"].join(__dirname, 'files/script/includeHtml.js'));
});

// static img file

app.get('/logo', function (req, res) {
  res.sendFile(_path["default"].join(__dirname, 'files/img/logo.png'));
});
app.get('/imgp2', function (req, res) {
  res.sendFile(_path["default"].join(__dirname, 'files/img/soffice.bin_KEJCA5VLiN.png'));
});
