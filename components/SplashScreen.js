import React from 'react';
import { StyleSheet, Image, View } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';

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

const navigateHome = NavigationActions.reset({
    index: 0,
    actions: [NavigationActions.navigate({ routeName: 'App' })],
});

class SplashScreen extends React.Component {

    componentWillReceiveProps(nextProps) {

        const currentRoute = nextProps.nav.routes[nextProps.nav.index];

        if (currentRoute.routeName === 'Splash') {
            //Wait for Web Content to Load.
            let appLoaded = true;
            Object.entries(nextProps.screens).forEach((screen) => {
                if (!screen[1].isLoaded) { appLoaded = false; }
            });
            if (appLoaded) {
                this.props.navigation.dispatch(navigateHome);
            }
        }
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

const mapStateToProps = state => {
    return {
        nav: state.nav,
        screens : state.screens,
    };
};

export default connect(mapStateToProps)(SplashScreen);
