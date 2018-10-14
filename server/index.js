require("dotenv").config();
const express = require("express");
const {json} = require("body-parser");
const cors = require("cors");
const massive = require("massive");
const {getAll,getTasks,addTask,deleteTask,addProject} = require("./projCtrl");

var app = express();
app.use(json());
app.use(cors());

massive(process.env.CONNECTION_STRING).then(dbInstance=>{
    app.set("db",dbInstance);
}).catch(err=>console.log(err));

app.get("/api/projects",getAll);
app.get("/api/tasks",getTasks);
app.post("/api/addtask",addTask);
app.delete("/api/removetask/:id",deleteTask);
app.post("/api/addproject",addProject);

app.listen(process.env.PORT,()=>{
    console.log("Listening on port: "+process.env.PORT);
})
