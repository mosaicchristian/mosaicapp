import { routeName as homeRoute } from '../components/HomeScreen.js';
import { AppNavigator } from '../navigators/AppNavigator.js';

const initialState = AppNavigator.router.getStateForAction(AppNavigator.router.getActionForPathAndParams(homeRoute));

function NavigationReducer(state = initialState, action) {
    let nextState = AppNavigator.router.getStateForAction(action, state);
    return nextState || state;
}

export default NavigationReducer;
