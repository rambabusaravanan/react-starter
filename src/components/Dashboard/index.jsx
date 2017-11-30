import React from 'react';

export default class Dashboard extends React.Component {
  render() {
    let flag = this.props.flag;

    return (
      <div>
        <button onClick={() => this.props.onToggle(!flag)}>Toggle</button>
        <span>{this.props.flag ? 'ON' : 'OFF'}</span>
      </div>
    );
  }
}
