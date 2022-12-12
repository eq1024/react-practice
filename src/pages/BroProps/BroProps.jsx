import React, { Component } from 'react';

function ComA({ msg }) {
  return <div>这是A{msg}</div>;
}
function ComB({ change }) {
  return <div onClick={change.bind(this, '这是b组件通讯来的数据')}>这是B</div>;
}

class BroProps extends Component {
  state = {
    msgA: '数据a',
  };
  change = (data) => {
    this.setState({
      msgA: data,
    });
  };
  render() {
    return (
      <>
        <ComA msg={this.state.msgA} />
        <ComB change={this.change} />
      </>
    );
  }
}

export default BroProps;
