import React, { Component } from "react";
import axios from "axios";
class EditTask extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
    };
  }
  onEditHandler = (e) => {
    console.log(this.props.title);
    const updatedTask = { title: "Here is the Updated Value" };
    axios
      .put(`https://jsonplaceholder.typicode.com/posts/${this.props.id}`, updatedTask)
      .then((response) => {
        this.setState({ title: response.data.title });
console.log(response.data)
      })
  };


  render() {
    return (
      <>
        <button onClick={this.onEditHandler}>Edit</button>
      </>
    );
  }
}

export default EditTask;
