const defaultState = null;
const commitState = (state = defaultState, action) => {
  switch (action.type) {
    case "COMMIT_SUCCESS": {
      return action.payload;
    }
    default:
      return state;
  }
};

export default commitState;
