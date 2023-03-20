var express = require("express")
var app = express()
var port = process.env.port || 3000;

function addNumbers(number1, number2){
    return number1 + number2;
}

app.get('/addTwoNumbers', (req, res) =>{
    var number1= req.query.number1;
    var number2= req.query.number2;
    var result= addNumbers(number1, number2);
    res.jason({statusCode:200, data:result, messgae:'Success'});
});

app.listen(port,()=>{
    console.log("App listening to: "+port)
})
