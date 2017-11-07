import { TabNavigator } from 'react-navigation';
import HomeScreen, {routeName as homeRoute} from '../components/HomeScreen.js';

export const screens = {
    [homeRoute]: { screen: HomeScreen},
};

export const tabOptions = {
    tabBarOptions: {
        showLabel: false,
        activeTintColor: '#f15922',
        inactiveTintColor: '#818285',
        style: {
            backgroundColor: '#231f20',
        },
    },
};

export const AppNavigator = TabNavigator(screens, tabOptions);

export default AppNavigator;
