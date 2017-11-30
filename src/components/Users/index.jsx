import React from 'react';
import * as Api from '../../helper/api';

export default class Users extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
    this.loadUsers = this.loadUsers.bind(this);
  }

  componentDidMount() {
    this.loadUsers();
  }

  loadUsers() {
    this.setState({ data: [] });
    Api.getUsers()
      .then(response => {
        this.setState({ data: response.data });
      })
      .catch(error => {
        console.log('error occured ..', error);
      });
  }

  render() {
    const list = this.state.data.map(user => (
      <div key={user.id}>{user.name}</div>
    ));

    return (
      <div>
        <button onClick={this.loadUsers}>Refresh</button>
        {this.state.data.length === 0 && <div>Loading ..</div>}
        {list}
      </div>
    );
  }
}
