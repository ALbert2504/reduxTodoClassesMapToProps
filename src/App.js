import React, {Component} from 'react';

//Redux
import {connect} from 'react-redux';
import * as todoActions from './store/todo/actions';

//styles
import styles from './App.module.css';

//components
import TodoItem from "./components/TodoItem";
import VisibilityFilter from "./components/VisibilityFilter";

class App extends Component {

  state = {
    value: '',
  };

  handleInputChange = (e) => {
    this.setState({
      value: e.target.value
    });
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    const {addTodo} = this.props;
    addTodo(this.state.value);

    this.setState(prevState => ({
      ...prevState,
      value: ''
    }));
  };

  getVisibleTodos = (filter, todos) => {
    switch (filter) {
      case 'SHOW_ALL': {
        return todos
      }
      case 'SHOW_ACTIVE': {
        return todos.filter(t => !t.done)
      }
      case 'SHOW_COMPLETED': {
        return todos.filter(t => t.done)
      }
      default: {
        return todos
      }
    }
  }

  render() {

    const {value} = this.state;
    const {todo, visibilityFilter} = this.props;

    const setVisibility = this.getVisibleTodos(visibilityFilter, todo);

    return (
      <div className={styles.App}>
        <form
          onSubmit={this.handleFormSubmit}
          className={styles.todoForm}
        >
          <input onChange={this.handleInputChange} value={value} type="text"/>
          <button>Add</button>
        </form>
        <div className={styles.todolist}>
          {
            setVisibility.map((elem) => {
              return (
                <TodoItem key={elem.id} value={elem.value} id={elem.id} done={elem.done}/>
              )
            })
          }
        </div>
        <p className={styles.visibilityFilters}>
          Show:
          {' '}
          <VisibilityFilter filter='SHOW_ALL'>
            All
          </VisibilityFilter>
          {' '}
          <VisibilityFilter filter='SHOW_COMPLETED'>
            Completed
          </VisibilityFilter>
          {' '}
          <VisibilityFilter filter='SHOW_ACTIVE'>
            Active
          </VisibilityFilter>
        </p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todo: state.todoReducer.todo,
    visibilityFilter: state.setVisibilityFilterReducer
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (todo) => dispatch(todoActions.addTodo(todo)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
