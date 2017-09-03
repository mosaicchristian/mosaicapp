import { SCREEN_FINISH } from '../actions/screen.js';
import { screens } from '../navigators/AppNavigator.js';


let initialState = {};

Object.keys(screens).forEach((screen) => {
    initialState[screen] = {isLoaded: false};
});


function ScreenReducer(state = initialState, action) {
    switch (action.type) {
        case SCREEN_FINISH:
            return {...state, [action.screen]: {...state[action.screen], isLoaded: true}};
        default:
            return state;
    }
}

export default ScreenReducer;
