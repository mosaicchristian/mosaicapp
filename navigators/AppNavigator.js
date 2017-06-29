import { TabNavigator } from 'react-navigation';

import HomeScreen from '../components/HomeScreen.js';

const AppNavigator = TabNavigator({
    Home: { screen: HomeScreen},
});

export default AppNavigator;
