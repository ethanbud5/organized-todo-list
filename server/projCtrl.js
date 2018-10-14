
function getAll(req,res){
    req.app
        .get("db")
        .get_projects()
        .then(response=>{
            res.status(200).json(response)
        }).catch(err=>res.status(500).send(err))
}

function getTasks(req,res){
    req.app
        .get("db")
        .get_tasks()
        .then(response=>{
            res.status(200).json(response)
        }).catch(err=>res.status(500).send(err))
}
function addTask(req,res){
    req.app
        .get("db")
        .add_task([req.query.task,req.query.project])
        .then(response=>{
            res.status(200).json(response);
        }).catch(err=>res.status(500).send(err))
}
function deleteTask(req,res){
    req.app
        .get("db")
        .delete_task(req.params.id)
        .then(response=>{
            res.status(200).json(response);
        }).catch(err=>res.status(500).send(err));
}
function addProject(req,res){
    req.app
    .get("db")
    .add_project(req.query.project)
    .then(response=>{
        res.status(200).json(response);
    }).catch(err=>res.status(500).send(err))
}

module.exports ={
    getAll,
    getTasks,
    addTask,
    deleteTask,
    addProject
} 
