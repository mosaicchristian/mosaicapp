import Expo from 'expo';
import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import AppReducer from './reducers/main.js';
import ConnectedRootNavigator from './navigators/root.js';

class App extends React.Component {

    store = createStore(
        AppReducer,
        applyMiddleware(logger),
    );

    render() {
        return (
          <Provider store={this.store}>
            <ConnectedRootNavigator />
          </Provider>
        );
    }
}
Expo.registerRootComponent(App);
