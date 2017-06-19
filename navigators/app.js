import { TabNavigator } from 'react-navigation';

import HomeScreen from '../components/Home.js';

const AppNavigator = TabNavigator({
    Home: { screen: HomeScreen},
});

export default AppNavigator;
