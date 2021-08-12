import axios from "axios";
import React, { Component, Fragment } from "react";
import DeleteTask from "./DeleteTask";
import EditTask from "./EditTask";
import './TaskList.css'
class TaskList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: [],
      errormsg: "",
    };
  }
  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        //   console.log(response.data)
        this.setState({ tasks: response.data });
      })
      .catch((error) => {
        this.setState({ errormsg: "Data not found" });
      });
  }
//   setUpdate = (text,key) =>{
//   // console.log(text)
//   const tasks = this.state.tasks
//   console.log(tasks)
// }
// onEditHandler = e => {
//   console.log(e)
//   this.setState({
//     [e.target.name] : e.target.value,
//   })
//   console.log(e.target.value)
  
// }
  render() {
    const { tasks, errormsg } = this.state;
    return (
      <Fragment>
        
          <ol>
            {tasks.length
              ? tasks.map((task) => (
                  <div>
                    <li><input type="text" key={task.id} onChange={this.props.onEditHandler} value = {task.title} name={task.title}/></li>
                    {/* <li type="text" key={task.id} onClick={this.temp}>
                       {task.title} </li> */}
                    
                    <EditTask id = {task.id} title = {task.title} onEditTask={this.props.onEditHandler}/>
                    <DeleteTask
                      id={task.id}
                      onDeleteTask={this.props.deleteTask}
                    />
                  </div>
                ))
              : null}
            {errormsg ? <h1>{errormsg}</h1> : ""}
          
            </ol>
      </Fragment>
    );
  }
}

export default TaskList;
