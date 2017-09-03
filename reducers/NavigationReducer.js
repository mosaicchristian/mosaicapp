import { NavigationActions } from 'react-navigation';
import { RootNavigator } from '../navigators/RootNavigator.js';

const initialNavState = RootNavigator.router.getStateForAction(
    NavigationActions.reset({
        index: 1,
        actions: [
            NavigationActions.navigate({ routeName: 'App'}),
            NavigationActions.navigate({ routeName: 'Splash'}),
        ],
    })
);

function NavigationReducer(state = initialNavState, action) {
    let nextState = RootNavigator.router.getStateForAction(action, state);
    return nextState || state;
}

export default NavigationReducer;
