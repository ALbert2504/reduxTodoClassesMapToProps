import {nanoid} from 'nanoid';
import {types} from './actions';

const initialState = {
  todo: [],
};

export default (state = initialState, action = {}) => {
  switch(action.type) {
    case types.ADD_TODO: {
      const newTodo = {
        id: nanoid(),
        value: action.payload,
        done: false
      };
      return {
        ...state,
        todo: [...state.todo, newTodo]
      };
    }
    case types.TOGGLE_TODO: {
      const newList = state.todo.map((elem) => {
        return {
          ...elem,
          done: elem.id === action.payload ? !elem.done : elem.done
        };
      });
      return {
        ...state,
        todo: newList
      };
    }
    case types.DELETE_TODO: {
      const newList = state.todo.filter((elem) => elem.id !== action.payload);
      return {
        ...state,
        todo: newList
      }
    }
    default: {
      return state;
    }
  }
}