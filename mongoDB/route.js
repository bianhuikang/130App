var express = require('express')
//初始化express模块的对象
var app = express()

//解析body  post请求解析参数需要用到
var bodyparse = require('body-parser');


var mon = require("./mongo");
var mongo =new  mon()

//使用bodyparse 进行解析
app.use(bodyparse.urlencoded({extended:true}));


//添加
app.use('/add', function (req, res) {
	   
	 res.set("Access-Control-Allow-Origin","*")
     //获取查询体 
     var query = req.query
     
     //获取姓名
     var name = query.name;
     
     //获取年龄
     
     var age = query.age;
     
     
	  //插入
	  mongo.insert("stu",{name:name,age:age},function(result){
		  console.log("插入成功");
		  res.send(result)
		  
	  })
	  
})

//删除
app.use('/del',function(req,res,next){
	
	res.set("Access-Control-Allow-Origin","*")

	console.log("删除=="+req)
	
	//获取查询体 
     var query = req.query
     
     //获取姓名
     var name = query.name;
     
     //获取年龄
     
     var age = query.age;


	 //删除
	  mongo.del("stu",{name:name,age:age},function(result){
		  
		  res.send(result)
		  
	  })
	
})





//更新
app.use('/update',function(req,res,next){
	
 res.set("Access-Control-Allow-Origin","*")
	
	
   console.log("开始更新")
	var query = req.body;
	
	//旧值
	var oldStr = query.oldV;
	var newStr = query.newV;
	

		
	//新值
		
    //更新
	mongo.update("stu",oldStr,newStr,function(result){
	
		res.send(result)
		
	})
	
		
})


//查
app.post('/find',function(req,res,next){
	
	res.set("Access-Control-Allow-Origin","*")
    
	var query = req.body;
	    console.log("开始查找"+query.name)

	
	//查询
	mongo.select("stu",query,function(result){
		
		res.send(result)
		
		
	})

	
	
}) 





//监听端口号
app.listen(4000)

