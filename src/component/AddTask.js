import React, { Component } from "react";
import axios from "axios";
class AddTask extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();

    this.state = {
      title: "",
      errormsg: "",
    };
    this.onInputHandler = this.onInputHandler.bind(this);
    this.onAddTaskHandler = this.onAddTaskHandler.bind(this);
  }

  onInputHandler = (e) => {
    // console.log(e.target.value);

    this.setState({
      [e.target.name]: e.target.value,
    });
    // console.log(e.target.value);
  };
  onAddTaskHandler = (e) => {
    e.preventDefault();

    axios
      .post("https://jsonplaceholder.typicode.com/posts", this.state)
      .then((response) => {
        this.setState({ title: response.data.title, id: response.data.id });
          console.log(response)
      })

      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    const { title, errormsg } = this.state;
    return (
      <div>
        <form onSubmit={this.onAddTaskHandler}>
          <input
            type="text"
            name="title"
            value={title}
            onChange={this.onInputHandler}
            placeholder="add todo task"
          ></input>
          <p>{title}</p>
          <button type="submit">Add</button>
        </form>
      </div>
    );
  }
}

export default AddTask;
