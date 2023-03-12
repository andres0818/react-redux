export const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case "incremented":
      return state + 1;
    case "decremented":
      return state - 1;
    case "reset":
      return (state = 0);
    default:
      return state;
  }
};

export const actionIncremented = { type: "incremented" };
export const actionDecremented = { type: "decremented" };
export const actionReset = { type: "reset" };
