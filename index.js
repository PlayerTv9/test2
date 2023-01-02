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
app.get('/cane', function (req, res) {
  res.sendFile(_path["default"].join(__dirname, '/page/cane.html'));
});
app.listen(5000, function () {
  console.log("app is listening to port http://localhost:5000");
});
