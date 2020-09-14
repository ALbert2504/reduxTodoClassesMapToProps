import React, {Component} from "react";

//Redux
import {connect} from 'react-redux';
import * as todoActions from '../../store/todo/actions';

//styles
import styles from './TodoItem.module.css';

class TodoItem extends Component {

  handleToggleTodo = () => {
    const {toggleTodo} = this.props;
    toggleTodo(this.props.id);
  }

  handleDeleteTodo = () => {
    const {deleteTodo} = this.props;
    deleteTodo(this.props.id);
  }

  render() {

    const {value, done} = this.props;

    return (
      <div className={styles.todoItem}>
        <span
          onClick={this.handleToggleTodo}
          style={{textDecoration: done ? 'line-through' : 'none'}}
          className={styles.todoItem__value}
        >
          {value}
        </span>
        <div className={styles.todoItem__controls}>
          <button
            className={styles.todoItem__editBtn}
          >
            Edit
          </button>
          <button
            onClick={this.handleDeleteTodo}
            className={styles.todoItem__deleteBtn}
          >
            Delete</button>
        </div>

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    todo: state.todoReducer.todo
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleTodo: (id) => dispatch(todoActions.toggleTodo(id)),
    deleteTodo: (id) => dispatch(todoActions.deleteTodo(id))
  };
};



export default connect(mapStateToProps, mapDispatchToProps)(TodoItem);