import logo from "./logo.svg";
import { createStore } from "redux";
import ReactDOM from "react-dom/client";
import "./App.css";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const counterReducer = (state = count, action) => {
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

  const store = createStore(counterReducer);

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

  const counter = () => store.getState();

  store.subscribe(() => {
    setCount(store.getState());
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <div
          style={{
            display: "flex",
            height: "30px",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <button onClick={remove}>-</button>
          <p>{count}</p>
          <button onClick={add}>+</button>
          <button onClick={reset}>Reset</button>
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}



export default App;
