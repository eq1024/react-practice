import React, { Component } from 'react';

function SonF({ trigger, msg, children }) {
  return (
    <div onClick={trigger.bind(this, 'SonF')}>
      123{msg} --- {children}
    </div>
  );
}

class Props extends Component {
  state = {};
  render() {
    return (
      <>
        <SonF msg={this.state.msg1}>这里的内容就是Children</SonF>
      </>
    );
  }
}

export default Props;
