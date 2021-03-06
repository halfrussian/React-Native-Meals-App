
import ExpoStatusBar from 'expo-status-bar/build/ExpoStatusBar';
import React from 'react';
import { RestaurantsScreen } from './src/features/restaurants/screens/restuarants.screen';
import { ThemeProvider } from 'styled-components/native';
import {theme} from './src/infrastructure/theme'
import {useFonts as useOswald ,Oswald_400Regular}  from '@expo-google-fonts/oswald'
import {useFonts as useLato,Lato_400Regular}  from '@expo-google-fonts/lato'
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeArea } from './src/components/utils/safe-area.component';
import {Ionicons} from '@expo/vector-icons';



const Settings = () => (
  
<SafeArea>
    <Text>Settings</Text>
  </SafeArea>
);
const Map = () => (
  <SafeArea>
    <Text>Map</Text>
  </SafeArea>
);

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }
  const Tab = createBottomTabNavigator();

  return (
    <>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen name="Restaurants" component={RestaurantsScreen} />
            <Tab.Screen name="Settings" component={Settings} />
            <Tab.Screen name="Map" component={Map} />
          </Tab.Navigator>
        </NavigationContainer>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}