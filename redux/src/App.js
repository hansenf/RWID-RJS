/* eslint-disable react/jsx-no-undef */
import React from "react";
import { Provider } from "react-redux";
import store from "./store";

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <TodoApp/>
      </div>
    </Provider>
  )
}

export default App;