import React from 'react';
import { StyleSheet, View} from 'react-native';
import { connect } from 'react-redux';
import WebSurface from './WebSurface.js';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        marginTop: 20,
    },
});

export const routeName = 'Giving';
const URL = 'http://mosaicchristian.org/mobilegive';

class GivingScreen extends React.Component {
    static navigationOptions = {
        title: routeName,
    };

    render() {
        return (
          <View style={styles.container}>
            <WebSurface name={routeName} url={URL} />
          </View>
        );
    }
}

export default connect()(GivingScreen);
