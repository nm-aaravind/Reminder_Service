const express=require("express")
const bodyParser=require("body-parser")
const {PORT}=require("./config/serverConfig")
const {sendBasicEmail}=require('./services/email_service')
function setupAndStartServer(){
    const app=express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}))
    app.listen(PORT,()=>{
        console.log("Server started in PORT",PORT)
        let obj=sendBasicEmail("support@admin.com","nmadtemp@gmail.com","Hey there, from MMT","Hope you like our service");
        console.log(obj)
    });
}
setupAndStartServer()