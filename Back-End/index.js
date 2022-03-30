const cors = require("cors");
const bp = require("body-parser");
const exp = require("express");
const expressValidator = require('express-validator');
const cookieParser = require('cookie-parser')

const {success,error} = require('consola')
const {connect} = require("mongoose");
const app  = exp();
const  { engine } = require('express-handlebars') ;
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');
app.use(bp.urlencoded({ extended: false, limit: '50mb', parameterLimit: 100000}));
app.set('view engine', 'ejs');
app.use(exp.static("files"));
// parse application/json
app.use(expressValidator());
app.use(bp.json());

app.get('/', (req, res) => {
    res.render('home');
});


app.post("/upload", (req, res) => {
    const newpath = __dirname + "/files/";
    const file = req.files.file;
    const filename = file.name;
   
    file.mv(`${newpath}${filename}`, (err) => {
      if (err) {
        console.log(file)
        res.status(500).send({ message: "File upload failed", code: 200 });
      }
      res.status(200).send({ message: "File Uploaded", code: 200 });
    });
  });

const {DB, PORT}= require("./config");
//Initialize the application 
//Middlewares

app.use(cors());
app.use(bp.json());
app.use(cookieParser());



app.use("/api/users",require("./routes/users"));
app.use("/api/admin",require("./routes/admins"));
app.use("/api/command",require("./routes/command"));
app.use("/api/livreur",require("./routes/livreur"));
 








const startApp = async ()=>{
try{
    //connection with DB
    await connect(DB,{
        useNewUrlParser: true
})
success({message: `Successfully connected with the Database \n${DB}`,
badge : true} ); 
      //Start Listenting for the serevr 
    app.listen(PORT, ()=>
        success({message: `Server started o PORT ${PORT}` , badge: true}));

}catch(err){

    error({message: `Unable to connect with Database connected with the Database \n${err}`,
    badge : true} );
    startApp();
}
}
startApp();
