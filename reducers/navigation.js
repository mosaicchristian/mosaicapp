import { RootNavigator } from '../navigators/root.js';

const splashAction = RootNavigator.router.getActionForPathAndParams('Splash');
const initialNavState = RootNavigator.router.getStateForAction(splashAction);

function navigationReducer(state = initialNavState, action) {
    let nextState = RootNavigator.router.getStateForAction(action, state);
    return nextState || state;
}

export default navigationReducer;
