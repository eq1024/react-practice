import React, { Component } from 'react';

/**
 * bind 方式传参数
 * event参数必须在最后,不能被覆盖
 */
// class Hello extends Component {
//   event1 = (z1, z2, event) => {
//     event.preventDefault();  //默认事件
//     event.stopPropagation(); //禁止冒泡
//     console.log('类组件事件触发', z1, z2, event);
//   };
//   render() {
//     return (
//       <a href="https://baidu.com" onClick={this.event1.bind(this, 1, 2)}>
//         你好啊
//       </a>
//     );
//   }
// }

/**
 * 多一层函数方式传参
 * event可以自定义位置
 */
class Hello extends Component {
  state = {
    id: 1,
    name: '郭德纲',
  };
  event1 = (e, z1, z2) => {
    e.preventDefault(); //默认事件
    e.stopPropagation(); //禁止冒泡
    console.log('类组件事件触发', e, z1, z2);
    this.setState({
      name: '郭麒麟',
    });
  };
  render() {
    return (
      <a href="https://baidu.com" onClick={(e) => this.event1(e, 1, 2)}>
        你好啊,{this.state.name},你的id是{this.state.id}
      </a>
    );
  }
}

export default Hello;
