const express=require("express")
const bodyParser=require("body-parser")
const {PORT}=require("./config/serverConfig")

function setupAndStartServer(){
    const app=express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}))
    app.listen(PORT,()=>{
        console.log("Server started in PORT",PORT)
    })
}
setupAndStartServer()