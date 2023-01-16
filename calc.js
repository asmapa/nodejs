const express = require("express");
const bodyparser = require("body-parser");

const app = express();

app.use(bodyparser.urlencoded({extended : true}));
app.get("/",function(req,res){

    res.sendFile(__dirname + "/find.html");
});
app.post("/",function(req,res){

    var num1=Number(req.body.num1);
    var num2 = Number(req.body.num2);
    var num3= num2/100;
    var result = num1/(num3*num3);

    res.send("the bmi is"+result);
})




app.listen(8000,function(){
    console.log("server connected successfully @ 3000");
});