var express = require("express");//loading built-in module express
var app = express();
app.use(express.static(__dirname + "/public"));
app.get("/", function (req, res) {
    res.end("hello world");
});
app.get("/myurl", function (req, res) {
    var a = req.query.fn;
    var a1 = req.query.ln;
    var e = req.query.em;
    var p = req.query.pn;
    var b = req.query.location;
    var c = req.query.dt;
    var d = req.query.rd;
    res.end(`Fisrt Name:${a}<br>Last name:${a1}<br>Email:${e}<br>Phone no.${p}<br> Location: ${b}<br/>Date:${c}<br/> Course: ${d}`);
});
var port = 8080;
app.listen(port);
console.log('Listening(today) on port: ' + port)