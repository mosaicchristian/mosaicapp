import { TabNavigator } from 'react-navigation';
import HomeScreen, {routeName as homeRoute} from '../components/HomeScreen.js';
import SermonScreen, {routeName as sermonRoute} from '../components/SermonScreen.js';
import AboutScreen, {routeName as aboutRoute} from '../components/AboutScreen.js';
import GivingScreen, {routeName as givingRoute} from '../components/GivingScreen.js';

export const screens = {
    [homeRoute]: { screen: HomeScreen},
    [sermonRoute]: { screen: SermonScreen},
    [aboutRoute]: { screen: AboutScreen},
    [givingRoute]: { screen: GivingScreen},

};

export const AppNavigator = TabNavigator(screens);

export default AppNavigator;
