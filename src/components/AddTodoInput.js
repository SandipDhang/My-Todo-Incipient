import React from "react";
import { addTodo } from "../actions";
import { connect } from "react-redux";

import TextField from "@material-ui/core/TextField";

class AddTodoInput extends React.Component {
  render() {
    const handleSubmit = (event) => {
      event.preventDefault();
      let input = event.target.TodoInput.value;
      if (input.length > 0) {
        this.props.dispatch(addTodo(input));
        event.target.TodoInput.value = "";
      } else {
        alert("Task Feild is empty");
      }
    };

    return (
      <div>
        <form onSubmit={handleSubmit}>
          <TextField
            id="outlined-basic"
            name="TodoInput"
            label="Enter to add Todo"
            variant="outlined"
            fullWidth
          />
        </form>
      </div>
    );
  }
}

export default connect()(AddTodoInput);
