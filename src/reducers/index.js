import { combineReducers } from 'redux';
import dashboard from './dashboardReducer';
import general from './generalReducer';

const reducers = combineReducers({
  dashboard,
  general
});

export default reducers;
