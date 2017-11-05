import { combineReducers } from 'redux';
import NavigationReducer from './NavigationReducer.js';

const AppReducer = combineReducers({
    nav: NavigationReducer,
});

export default AppReducer;
