import { combineReducers } from 'redux';
import navigationReducer from './navigation.js';

const AppReducer = combineReducers({
    nav: navigationReducer,
});

export default AppReducer;
