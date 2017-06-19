import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addNavigationHelpers, StackNavigator } from 'react-navigation';

import SplashScreen from '../components/Splash.js';
import AppNavigator from '../navigators/app.js';


export const RootNavigator = StackNavigator({
    Splash: { screen: SplashScreen },
    App: { screen: AppNavigator },
}, {
    navigationOptions: { header: null},
});

const ConnectedRootNavigator = ({ dispatch, nav }) => (
  <RootNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
);

ConnectedRootNavigator.propTypes = {
    dispatch: PropTypes.func.isRequired,
    nav: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    nav: state.nav,
});

export default connect(mapStateToProps)(ConnectedRootNavigator);
