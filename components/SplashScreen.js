import React from 'react';
import { StyleSheet, Image, View } from 'react-native';
import { NavigationActions } from 'react-navigation';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#000',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logoStyle: {
        width: 150,
        height:150,
    },
});

let sleep = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
};

class SplashScreen extends React.Component {
    componentDidMount() {
        const dispatchAction = NavigationActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({ routeName: 'App' })],
        });

        sleep(2000).then(() => {
            this.props.navigation.dispatch(dispatchAction);
        });
    }

    render() {
        return (
          <View style={styles.container}>
            <Image
              style={styles.logoStyle}
              source={require('../assets/icons/app.png')}
            />
          </View>
        );
    }
}

export default SplashScreen;
