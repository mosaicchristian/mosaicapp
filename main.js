import Expo from 'expo';
import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import AppNavigator from './navigators/AppNavigator.js';

class App extends React.Component {

    store = createStore(
        applyMiddleware(logger),
    );

    render() {
        return (
          <Provider store={this.store}>
            <AppNavigator />
          </Provider>
        );
    }
}

Expo.registerRootComponent(App);
