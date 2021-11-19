
import ExpoStatusBar from 'expo-status-bar/build/ExpoStatusBar';
import React from 'react';
import { RestaurantsScreen } from './src/features/restaurants/screens/restuarants.screen';


export default function App() {
  return (
    <>
    <RestaurantsScreen />
    <ExpoStatusBar style='auto' />
    </>
  );
}

