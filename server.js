let express=require("express");
let session=require("express-session")
let app=express();

let bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));

app.use(session({secret:"codingdojo"}));


app.use(express.static(__dirname +"/static"));

app.set('views',__dirname +'/views');


app.set('view engine','ejs');

app.get('/',(req,res)=>{


	res.render('index');});


app.post('/process',(req,res)=>{
	
	req.session.data=req.body;



	console.log(req.body);

     res.redirect('/result',)
});


app.get('/result',(req,res)=>{
	

     res.render('result',{my_data:req.session.data});
});

app.get('/go_back',(req,res)=>{
	

     res.redirect('/');
});



app.listen(8000,()=>{
	console.log("listening on 8000");});