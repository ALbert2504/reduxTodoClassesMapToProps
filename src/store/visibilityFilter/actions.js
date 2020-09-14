export const types = {
  SET_VISIBILITY_FILTER: 'SET_VISIBILITY_FILTER'
};

export function setVisibilityFilter(filter) {
  return {
    type: types.SET_VISIBILITY_FILTER,
    payload: filter
  };
}