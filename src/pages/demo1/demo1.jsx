import React, { Component } from 'react';
import { getComment } from '../../api/common/common';

class Demo1 extends Component {
  state = {
    kind: ['最热', '最新'],
    comment: [],
    cur: '最热',
  };
  componentDidMount() {
    this.updateData();
  }
  updateData = () => {
    getComment().then((res) => {
      console.log(res, 1);
      this.setState({
        comment: res.data.data,
      });
    });
  };
  changeTab = (item) => {
    this.setState({
      cur: item,
    });
    this.updateData();
  };
  render() {
    return (
      <div>
        <div style={{ display: 'flex' }}>
          {this.state.kind.map((item) => {
            return (
              <div style={{ fontWeight: item == this.state.cur ? 'bold' : 'lighter' }} key={item} onClick={this.changeTab.bind(this, item)}>
                {item}
              </div>
            );
          })}
        </div>
        {this.state.comment.map((item) => {
          return (
            <div style={{ display: 'flex', alignItems: 'center', background: 'pink', margin: '10px' }} key={item.id}>
              <div style={{ marginRight: '10px' }}>
                <img style={{ width: '60px', borderRadius: '100%' }} src={item.avatar} alt="" />
              </div>
              <div>
                <div style={{ textAlign: 'left' }}>{item.name}</div>
                <div>{item.comment}</div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Demo1;
