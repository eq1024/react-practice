import React, { Component } from 'react';
class Counter extends Component {
  state = {
    num: 0,
  };
  add = () => {
    this.setState({
      num: this.state.num + 1,
    });
    console.log(this);
  };
  render() {
    return (
      <div>
        <div>{this.state.num}</div>
        <button onClick={this.add}> +1 </button>
      </div>
    );
  }
}

export default Counter;
