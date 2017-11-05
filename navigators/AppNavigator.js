import { TabNavigator } from 'react-navigation';
import HomeScreen, {routeName as homeRoute} from '../components/HomeScreen.js';

export const screens = {
    [homeRoute]: { screen: HomeScreen},
};

export const AppNavigator = TabNavigator(screens);

export default AppNavigator;
