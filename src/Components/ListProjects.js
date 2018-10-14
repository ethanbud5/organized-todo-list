import React from "react";
import axios from "axios";
import Accordion from "./Accordion";

class ListProjects extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            projects:[],
            tasks:[],
            task_input:"",
            project_input:"",
            addProject:false
        }
        this.taskChange = this.taskChange.bind(this);
        this.projectChange = this.projectChange.bind(this);
        this.removeTask = this.removeTask.bind(this);
    }

    componentDidMount(){
        axios.get("/api/projects").then(res=>{
            axios.get("/api/tasks").then(response=>{

                this.setState({
                    projects:res.data,
                    tasks:response.data
                });
            })
        })
    }
    addTask(e,id){
        if(e.keyCode === 13){
            axios.post("/api/addtask?task="+this.state.task_input+"&project="+id).then(res=>{
                this.setState({
                    tasks:res.data,
                    task_input:""
                })
            }).catch(err=>alert(err))
        }
    }
    taskChange(e){
        this.setState({task_input:e.target.value})
    }
    projectChange(e){
        this.setState({project_input:e.target.value})
    }
    removeTask(id){
        axios.delete("/api/removetask/"+id).then(res=>{
            this.setState({
                tasks:res.data
            })
        }).catch(err=>alert(err));
    }
    addProject(e){
        if(e.keyCode === 13){
            axios.post("/api/addproject?project="+this.state.project_input).then(res=>{
                this.setState({
                    projects:res.data,
                    project_input:"",
                    addProject:false
                })
            }).catch(err=>alert(err))
        }
    }

    render(){
        console.log(this.state)
        let listProjects = this.state.projects.map(project=>{
            let filteredTasks = this.state.tasks.filter(task=>{
                return task.category_id === project.cat_id
            })
            let listTasks = filteredTasks.map((task,i)=>(
                <div key={task.task_id}>
                    <li>
                        {task.name}<span className="delete_x" onClick={()=>this.removeTask(task.task_id)}> X</span>
                    </li>
                    
                </div>
            ))

              return(  
                <div key={project.cat_id}  label={project.title}>
                        {listTasks}
                    <input onChange={this.taskChange} value={this.state.task_input} onKeyUp={(e)=>this.addTask(e,project.cat_id)} className="add_task" type="text" placeholder="Add Task..."/>
                </div>
              )
            
        }) 
        return(
            <div>
                <div className="align_center">
                    <button onClick={()=>this.setState({addProject:!this.state.addProject})}>
                        {!this.state.addProject?"Add Project":"Cancel"}
                    </button>
                    {this.state.addProject&&(
                        <div>
                            <input 
                                type="text"
                                onChange={this.projectChange}
                                placeholder="Add Project..."
                                value={this.state.project_input}
                                onKeyUp={(e)=>this.addProject(e)}
                            />
                        </div>
                    )}
                </div>
                <Accordion>{listProjects}</Accordion>
            </div>
        )
    }
}

export default ListProjects;