let initialState = {
  count: 0,
};
let reducer = (state = initialState, action) => {
  let newState = { ...state };
  if (action.type === "countUp") {
    newState.count++;
  } else if (action.type === "countDown") {
    newState.count--;
  } else {
  }
  return newState;
};

export default reducer;
