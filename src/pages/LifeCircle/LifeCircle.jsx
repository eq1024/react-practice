import React, { Component, FC } from 'react';

const Bt = () => {
  return <button>1</button>;
};

function tb() {
  return <div>2</div>;
}

class LifeCircle extends Component {
  constructor(props) {
    console.log('constructor');
    super(props);
  }
  state = {};
  componentDidMount() {
    console.log('componentDidMount');
  }
  render() {
    console.log('render');
    return (
      <div>
        <Bt />
      </div>
    );
  }
}

export default LifeCircle;
