import React, { Component } from 'react';

class EasyInput extends Component {
  state = { msg: '123' };
  change = (e) => {
    if (e.keyCode === 13) {
      console.log(this.state.msg);
    }
    this.setState({
      msg: e.target.value,
    });
  };
  render() {
    return (
      <>
        <input type="text" value={this.state.msg} onChange={this.change} onKeyUp={this.change} />
      </>
    );
  }
}
export default EasyInput;
