import React, { Component } from 'react';

// function SonF(Props) {
function SonF({ trigger, msg }) {
  return <div onClick={trigger.bind(this, 'SonF')}>123{msg}</div>;
}

class SonC extends Component {
  state = {};
  render() {
    return <div onClick={this.props.trigger.bind(this, 'SonC')}>456{this.props.msg}</div>;
  }
}

class Props extends Component {
  state = {
    msg1: '你好啊1',
    msg2: '你好啊2',
  };
  change = (data) => {
    this.setState({
      msg1: '你好啊1 -- 新' + data,
      msg2: '你好啊2 -- 新' + data,
    });
  };
  render() {
    return (
      <>
        <SonF msg={this.state.msg1} trigger={this.change} />
        <SonC msg={this.state.msg2} trigger={this.change} />
      </>
    );
  }
}

export default Props;
