import Expo from 'expo';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider} from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import MosaicApp from './reducers/main.js';

let store = createStore(
    MosaicApp,
    applyMiddleware(logger),
);

class App extends React.Component {
    render() {
        return (
          <Provider store={store}>
            <View style={styles.container}>
              <Text>Mosaic App. Hype!</Text>
            </View>
          </Provider>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

Expo.registerRootComponent(App);
