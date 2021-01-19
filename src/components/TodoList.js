import React from "react";
import { connect } from "react-redux";
import { deleteTodo } from "../actions";

import AssignmentIcon from "@material-ui/icons/Assignment";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

const TodoList = (props) => {
  const classes = useStyles();
  return (
    <List className={classes.root} Fullwidth>
      {props.todos.map((todo) => {
        return (
          <ListItem key={todo.id} Fullwidth>
            <ListItemAvatar>
              <Avatar>
                <AssignmentIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={todo.todo} />
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="delete">
                <DeleteIcon
                  onClick={() => props.dispatch(deleteTodo(todo.id))}
                />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        );
      })}
    </List>
  );
};

const mapStateToProps = (state) => {
  return {
    todos: state.todos.data,
  };
};
export default connect(mapStateToProps)(TodoList);
