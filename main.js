import Expo from 'expo';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import MosaicApp from './reducers/main.js';

let store = createStore(MosaicApp);

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Mosaic App. Hype!</Text>
      </View>
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
