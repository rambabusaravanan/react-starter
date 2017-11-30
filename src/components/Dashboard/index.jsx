import React from 'react';

export default class Dashboard extends React.Component {
  componentDidMount() {
    this.props.dispatchGetUsers();
  }

  render() {
    let flag = this.props.flag;

    const list = this.props.users.map(user => (
      <div key={user.id}>{user.name}</div>
    ));

    return (
      <div>
        <button onClick={() => this.props.onToggle(!flag)}>Toggle</button>
        <span>{this.props.flag ? 'ON' : 'OFF'}</span>

        <br />
        <br />
        <br />
        {list}
      </div>
    );
  }
}
