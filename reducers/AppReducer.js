import { combineReducers } from 'redux';
import NavigationReducer from './NavigationReducer.js';
import ScreenReducer from './ScreenReducer.js';

const AppReducer = combineReducers({
    nav: NavigationReducer,
    screens: ScreenReducer,
});

export default AppReducer;
