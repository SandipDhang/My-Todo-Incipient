import React from "react";
import { connect } from "react-redux";
import "fontsource-roboto";
import { Typography } from "@material-ui/core";

import AddTodoInput from "./AddTodoInput";
import TodoList from "./TodoList";

import "../custom.css";

class App extends React.Component {
  handleTodo = (todo) => {
    //console.log(this.props);
    return todo;
  };

  render() {
    return (
      <React.Fragment>
        <Typography variant="h3" component="h3">
          My To-Do List
        </Typography>
        <AddTodoInput />
        <TodoList />
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
  };
};

export default connect(mapStateToProps)(App);
