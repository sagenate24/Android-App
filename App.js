import React from 'react';
import { 
  Text, 
  View
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import HomeScreen from './Screen/HomeScreen';
import SurfaceMat from './Screen/SurfaceMat';
import EdgeType from './Screen/EdgeType';
import ShowerTub from './Screen/ShowerTub';

const Navigation = StackNavigator({
  Home: {screen: HomeScreen},
  SurfaceTypes: {screen: SurfaceMat},
  EdgeTypes: {screen: EdgeType},
  ShowerTubs: {screen: ShowerTub}

});

export default Navigation;
