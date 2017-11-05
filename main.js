import Expo from 'expo';
import React from 'react';
import { Provider, connect } from 'react-redux';
import { addNavigationHelpers } from 'react-navigation';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import AppNavigator from './navigators/AppNavigator.js';
import AppReducer from './reducers/AppReducer.js';

const store = createStore(
        AppReducer,
        applyMiddleware(logger),
);

class App extends React.Component {
    render() {
        return (<AppNavigator
          navigation={addNavigationHelpers({
              dispatch: this.props.dispatch,
              state: this.props.nav,
          })}   />
        );
    }
}

const mapStateToProps = (state) => ({
    nav: state.nav,
});

const ConnectedApp = connect(mapStateToProps)(App);

class Root extends React.Component {
    render() {
        return (
          <Provider store={store}>
            <ConnectedApp />
          </Provider>
        );
    }
}

Expo.registerRootComponent(Root);
