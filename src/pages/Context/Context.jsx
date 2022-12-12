import React, { Component, createContext } from 'react';

const { Provider, Consumer } = createContext();

function ComA() {
  return (
    <div>
      <ComASon />
    </div>
  );
}

function ComASon() {
  return (
    <Consumer>
      {(value) => {
        return <button>{value}</button>;
      }}
    </Consumer>
  );
}

class Context extends Component {
  state = {
    msgA: '提供的数据',
  };
  render() {
    return (
      <Provider value={this.state.msgA}>
        <ComA></ComA>
      </Provider>
    );
  }
}

export default Context;
