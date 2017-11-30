import { connect } from 'react-redux';
import { toggleHello, apiGetUsers } from '../actions';
import Dashboard from '../components/Dashboard';

// do logic here that are out of component's scope (between store and component)
// like 'ActiveTodo', 'CompletedTodo' containers for 'Todo' component
// This 'getModeText' is unused sample.
const getModeText = flag => {
  return flag ? 'YES' : 'NO';
};

const mapStateToProps = ({ dashboard }) => {
  return {
    users: dashboard.users,
    flag: dashboard.flag,
    flagText: getModeText(dashboard.flag)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onToggle: flag => dispatch(toggleHello(flag)),
    dispatchGetUsers: () => dispatch(apiGetUsers())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
