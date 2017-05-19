import { combineReducers } from 'redux';

const initialState = {};

const mainReducer = (state, action) => { 
    if (state === undefined) { 
        return initialState;
    }
};

const MosaicApp = combineReducers({
    mainReducer,
});

export default MosaicApp;