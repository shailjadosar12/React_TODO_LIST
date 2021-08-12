import React, { Component } from 'react'
import axios from 'axios'
 class DeleteTask extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              msg : ""
         }
     }
     deleteTask = e => {
        //  e.preventDefault()
         console.log(this.props.id)
         axios.delete(`https://jsonplaceholder.typicode.com/posts/${this.props.id}`)  
         .then((response) => {
            this.setState({ msg: 'Delete successful' }) 
            // if(this.msg === "Delete successful"){
            //     return <p>Row Delete</p>
            // }
            // else return <p>In Else</p>
            console.log(response.data);
         })
        
     }
    
    render() {
        const {msg} = this.state;
        return (
            <>
            {/* {msg.length
          ? msg.map((msg) => null)
          : <p>Row Deleted</p>} */}
               <button onClick ={this.deleteTask}>Delete</button> 
            </>
        );
    }
}

export default DeleteTask
