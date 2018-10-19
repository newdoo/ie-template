import { combineReducers } from 'redux';

import clock from './clock';
import { penderReducer } from 'redux-pender';

export default combineReducers({
    clock,
    pender: penderReducer
});