const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const authRoutes = require("./routes/AuthRoutes");
const User = require("./models/Users")
const app = express();

app.use(bodyParser.json());
app.use(authRoutes);

const uri = "mongodb+srv://admin:admin@cluster0.yd38mu6.mongodb.net/?retryWrites=true&w=majority";


mongoose.connect(uri, {
   useNewUrlParser: true
});

mongoose.connection.on("connected", () => {
   console.log("Connected to mongo instance");
});

mongoose.connection.on("error", (err) => {
   console.log("Error to Connected to mongo instance", err);
});

app.post("/login", function (req, res) {

   const { Username, Password } = req.body;
   let flag=0;
   User.find({username:Username} ,function(err, result){
      if(err) throw err;
      // console.log("result",result);
      resultData = result;
      if(result.length > 0){
         flag=1;
         res.send({msg:"Sucessful"});
      }
      if(flag==0){
         res.send({msg:"unsucessful"});
      }
   })
   
      // res.send("Unsucessful")
   
});

// app.get("/login" (req,res)=>{

//    res.send("Welcome to login page")
// })

app.listen(3000, () => {
   console.log("Listening on Port 3000");
});
