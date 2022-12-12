import React, { Component, createRef } from 'react';

class RefInput extends Component {
  // 先创建一个ref对象,保持语义化
  msgRef = createRef();

  keyUp = (e) => {
    if (e.keyCode === 13) {
      //值通过`.current.value`获取
      console.log(this.msgRef.current.value);
    }
  };
  render() {
    return (
      <>
        <input type="text" ref={this.msgRef} onKeyUp={this.keyUp} />
      </>
    );
  }
}
export default RefInput;
