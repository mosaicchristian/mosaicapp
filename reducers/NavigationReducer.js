import { RootNavigator } from '../navigators/RootNavigator.js';

const splashAction = RootNavigator.router.getActionForPathAndParams('Splash');
const initialNavState = RootNavigator.router.getStateForAction(splashAction);

function NavigationReducer(state = initialNavState, action) {
    let nextState = RootNavigator.router.getStateForAction(action, state);
    return nextState || state;
}

export default NavigationReducer;
