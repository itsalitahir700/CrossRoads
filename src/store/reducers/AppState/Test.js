const defaultState = null;
const test = (state = defaultState, action) => {
  switch (action.type) {
    case 'TEST': {
      return state;
    }
    default:
      return state;
  }
};

export default test;
