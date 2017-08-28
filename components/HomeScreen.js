import React from 'react';
import { StyleSheet, View, WebView } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});

class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Home',
    };
    render() {
        return (
          <View style={styles.container}>
            <WebView source={{uri: 'http://mosaicchristian.org/mobilehome'}} />
          </View>
        );
    }
}

export default HomeScreen;
