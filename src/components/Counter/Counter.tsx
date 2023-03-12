import React, { useState } from "react";
import {
  actionDecremented,
  actionIncremented,
  actionReset,
} from "./redux/action";
import { storeCounter } from "./redux/store";

const Counter = () => {
  const [count, setCount] = useState(storeCounter.getState());

  const add = () => {
    storeCounter.dispatch(actionIncremented);
  };

  const remove = () => {
    storeCounter.dispatch(actionDecremented);
  };
  const reset = () => {
    storeCounter.dispatch(actionReset);
  };

  storeCounter.subscribe(() => {
    setCount(storeCounter.getState());
  });

  return (
    <div style={styles.container}>
      <button className="btn btn-success " onClick={remove}>
        -
      </button>
      <p style={styles.text}>{count}</p>
      <button className="btn btn-success" onClick={add}>
        +
      </button>
      <button className="btn btn-danger" onClick={reset}>
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
