// import React from 'react';
// import { StatusBar } from 'expo-status-bar';
// import { NavigationContainer } from '@react-navigation/native';
// import Home from './Home';
// import Favorites from './Favorites';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import Icon from 'react-native-vector-icons/AntDesign';

// const Tab = createBottomTabNavigator();

// function MyTabs() {
//   return (
//     <Tab.Navigator initialRouteName='Home' screenOptions={{
//       tabBarActiveTintColor: '#06b6d4',
//     }}>
//       <Tab.Screen name="Home" component={Home} 
//       options={{
//         tabBarLabel: 'Home',
//         tabBarIcon: ({ color, size }) => (
//           <Icon name="home" color={color} size={size} />
//         ),
//       }}
//       />
//       <Tab.Screen name="Favorites" component={Favorites} 
//       options={{
//         tabBarLabel: 'Favorites',
//         tabBarIcon: ({ color, size, focused }) => (
//           focused ?
//           <Icon name="heart" color={color} size={size} />
//           :
//           <Icon name="hearto" color={color} size={size} />
//         ),
//       }}
//       />
//     </Tab.Navigator>
//   );
// }

// export default function App() {

//   return (
//     <NavigationContainer>
//         <MyTabs />
//         <StatusBar style="auto" />
//     </NavigationContainer>
//   );
// }

import React from 'react';
import { StatusBar } from 'expo-status-bar';
import Home from './Home';
import { Center, Heading, NativeBaseProvider } from 'native-base';

export default function App() {

  return (
    <NativeBaseProvider>
      <Center mt="12">
        <Heading pb="2">The Book is on the table</Heading>
        <Home />
      </Center>
      <StatusBar style="auto" />
    </NativeBaseProvider>
  );
}
