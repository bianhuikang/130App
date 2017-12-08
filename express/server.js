var express = require('express');
var mysql = require('mysql');
var app = express();

function dbff(query, res) {
	// {
	// 	header("Access-Control-Allow-Origin,*")
	// }
	db = mysql.createConnection({
		host: "127.0.0.1",
		user: 'root',
		password: '',
		database: 'xl'
	})
	db.connect();
	res.setHeader("Access-Control-Allow-Origin", "*");
	db.query(query, function(err, data) {
		res.jsonp({
			"info": data
		})
	})

}
//app.get('/',function(req,res){
//	var query = 'select * from newxinwen'
//	dbff(query,res)
//	
//})
app.get('/home', function(req, res) {
	var query = 'select * from sj'
	dbff(query, res)

})
app.listen('3000', function() {
	console.log("ok");
})