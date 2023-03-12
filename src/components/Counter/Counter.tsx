import React, { useState } from "react";
import { createStore } from "redux";

const Counter = () => {
  const [count, setCount] = useState(0);

  const counterReducer = (state = count, action: any) => {
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

  const store = createStore(
    counterReducer,
    // @ts-ignore
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  const actionIncremented = { type: "incremented" };
  const actionDecremented = { type: "decremented" };
  const actionReset = { type: "reset" };

  const add = () => {
    store.dispatch(actionIncremented);
  };

  const remove = () => {
    store.dispatch(actionDecremented);
  };
  const reset = () => {
    store.dispatch(actionReset);
  };

  store.subscribe(() => {
    setCount(store.getState());
  });

  return (
    <div style={styles.container}>
      <button className="btn btn-danger " onClick={remove}>
        -
      </button>
      <p style={styles.text}>{count}</p>
      <button className="btn btn-success" onClick={add}>
        +
      </button>
      <button className="btn btn-info" onClick={reset}>
        Reset
      </button>
    </div>
  );
};

export default Counter;

const styles = {
  container: {
    display: "flex",
    width: " 20px",
    height: "3vh",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
  text: {
    height: "100%",
  },
};
