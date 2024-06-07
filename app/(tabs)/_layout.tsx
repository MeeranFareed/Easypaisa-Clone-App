import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeScreen from '.';
import Cashpoint from './Cashpoint';
import Prmotion from '@/components/Prmotion';
import { EvilIcons } from '@expo/vector-icons';
import QRscreen from '../(tabs)/QRscreen';
import { AntDesign } from '@expo/vector-icons';
import MyAccount from '../(tabs)/MyAccount';
import Promptions from '../(tabs)/Promptions'
import MyStack  from '../../components/navigation/MyStack'
import MyDrawer from '../../components/navigation/MyDrawer'

const Tab = createBottomTabNavigator();

function TabLayout() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: 'green',
        headerShown:false
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Cashpoint"
        component={Cashpoint}
        options={{
          tabBarLabel: 'Cashpoint',
          tabBarIcon: ({ color, size }) => (
            <EvilIcons name="location" size={26} color={color} />
          ),
           
        }}
      />
      <Tab.Screen
        name="QRscreen"
        component={QRscreen}
        options={{
          tabBarLabel: 'Scaner',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="qrcode-scan" size={26} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Promptions"
        component={MyStack}
        options={{
          tabBarLabel: 'Prmotion',
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="notification" size={26} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="MyAccount"
        component={MyAccount}
        options={{
          tabBarLabel: 'My Account',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account-outline" size={26} color={color} />
          ),
        }}
      />
      
       
    </Tab.Navigator>
  );
}
export default TabLayout;





// import { Tabs } from 'expo-router';
// import React from 'react';

// import { TabBarIcon } from '@/components/navigation/TabBarIcon';
// import { Colors } from '@/constants/Colors';
// import { useColorScheme } from '@/hooks/useColorScheme';
// import { EvilIcons } from '@expo/vector-icons';
// import { MaterialCommunityIcons } from '@expo/vector-icons';
// import { AntDesign } from '@expo/vector-icons';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import HomeScreen from '.';
// export default function TabLayout() {

//   const colorScheme = useColorScheme();

//   return (
//     <Tabs
//       screenOptions={{
//         tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
//         headerShown: false,
//       }}>
//          <Tab.Screen
//         name="index"
//         component={HomeScreen}
//         options={{
//           tabBarLabel: 'Home',
//           tabBarIcon: ({ color, size }) => (
//             <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
             
//           ),
//         }}
//       />
//       <Tabs.Screen
//         name="index"
        
//         options={{
//           title: 'Home',
//           tabBarIcon: ({ color, focused }) => (
            
//             <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
//           ),
//         }}
//       />
//       <Tabs.Screen
//         name="Cashpoint"
//         options={{
//           title: 'Cash Point',
//           tabBarIcon: ({ color, focused }) => ( 
//             <EvilIcons name="location" size={26} color={color} />
//             // <EvilIcons name={focused ? 'location' : 'location'}  size={26} color={color} />

//             // <TabBarIcon name={focused ? 'code-slash' : 'code-slash-outline'} color={color} />
//           ),
//         }}
//       />
//       <Tabs.Screen
//         name="QR"
//         options={{
//           title: 'Scaner',
//           tabBarIcon: ({ color, focused }) => ( 
//             <MaterialCommunityIcons name="qrcode-scan" size={26} color={color} />
             
//           ),
//         }}
//       />
//       <Tabs.Screen
//         name="Promotiondetails"
//         options={{
//           title: 'Promotions',
//           tabBarIcon: ({ color, focused }) => ( 
//             <AntDesign name="notification" size={26} color={color} />
//             // <EvilIcons name={focused ? 'location' : 'location'}  size={26} color={color} />
//           //  <AntDesign name="notification" size={24} color="black" />
//             // <TabBarIcon name={focused ? 'code-slash' : 'code-slash-outline'} color={color} />
//           ),
//         }}
//       />
//       <Tabs.Screen
//         name="MyAccount"
//         options={{
//           title: 'My Account',
//           tabBarIcon: ({ color, focused }) => ( 
//             <MaterialCommunityIcons name="account-outline" size={26} color={color} />
//             // <EvilIcons name={focused ? 'location' : 'location'}  size={26} color={color} />
            
//             // <MaterialCommunityIcons name="account-outline" size={24} color="black" />
//           ),
//         }}
//       />
//     </Tabs>
//   );
// }
