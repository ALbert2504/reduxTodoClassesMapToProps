import {types} from './actions';

const initialState = 'SHOW_ALL';

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case types.SET_VISIBILITY_FILTER: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};