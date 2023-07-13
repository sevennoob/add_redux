import React, { Component } from "react";
import store from "../../redux/store";
import {
  createIncrementAction,
  createDecrementAction,
  createAsyncIncrementAction,
} from "../../redux/count_action";

export default class Count extends Component {
  add = () => {
    const { value } = this.incrementNum;
    store.dispatch(createIncrementAction(+value));
  };

  mins = () => {
    const { value } = this.incrementNum;
    store.dispatch(createDecrementAction(+value));
  };

  addIfOdd = () => {
    const { value } = this.incrementNum;
    if (store.getState() % 2 !== 0) {
      store.dispatch(createIncrementAction(+value));
    }
  };

  addAsync = () => {
    const { value } = this.incrementNum;
    // setTimeout(() => {
    //     store.dispatch(createIncrementAction(+value));
    // }, 1000);
    store.dispatch(createAsyncIncrementAction(+value, 1000));
  };

  render() {
    return (
      <div>
        <h1>Current Result: {store.getState()}</h1>
        <select ref={(c) => (this.incrementNum = c)}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        &nbsp;
        <button onClick={this.add}>+</button>&nbsp;
        <button onClick={this.mins}>-</button>&nbsp;
        <button onClick={this.addIfOdd}>increment if odd</button>&nbsp;
        <button onClick={this.addAsync}>increment async</button>
      </div>
    );
  }
}
