import { createDrawerNavigator } from '@react-navigation/drawer';
import MyProfile from '../MyProfile';
import HomeScreen from '@/app/(tabs)';

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator screenOptions={ headerShown=false} >
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
         
      />
      <Drawer.Screen
        name="MyProfile"
        component={MyProfile}
         
      />
       
    </Drawer.Navigator>
  );
}
export default MyDrawer;