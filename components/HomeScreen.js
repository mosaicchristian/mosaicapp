import React from 'react';
import { StyleSheet, View} from 'react-native';
import { connect } from 'react-redux';
import { FontAwesome } from '@expo/vector-icons';
import WebSurface from './WebSurface.js';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        marginTop: 20,
    },
});

export const routeName = 'Home';
const URL = 'http://mosaicchristian.org/mobilehome';

class HomeScreen extends React.Component {
    static navigationOptions = {
        title: routeName,
        tabBarIcon: ({tintColor}) => (
          <FontAwesome name="home" color={tintColor} size={26} />
        ),
    };

    render() {
        return (
          <View style={styles.container}>
            <WebSurface name={routeName} url={URL} />
          </View>
        );
    }
}

export default connect()(HomeScreen);
