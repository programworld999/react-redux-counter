let initialState = {
  count: 0,
  history: [],
};
let reducer = (state = initialState, action) => {
  let newState = { ...state };
  switch (action.type) {
    case "countUp":
      return {
        ...state,
        count: state.count + action.value,
        history: state.history.concat({
          id: Math.random(),
          count: state.count + action.value,
        }),
      };
      break;
    case "countDown":
      return {
        ...state,
        count: state.count - action.value,
        history: state.history.concat({
          id: Math.random(),
          count: state.count - action.value,
        }),
      };
      break;
    case "dltItem":
      return {
        ...state,
        history: state.history.filter((el) => el.id !== action.id),
      };
    default:
      break;
  }

  return newState;
};

export default reducer;
