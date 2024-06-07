import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Promptions from '../../app/(tabs)/Promptions';
import Promotiondetails from '../../components/Promotiondetails'
import MyDrawer from './MyDrawer';

const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator
      initialRouteName="Promption"
      screenOptions={{
         
        headerShown:false
      }}
    >
      <Stack.Screen
        name="Promotion"
        component={Promptions}
        options={{
          title: 'Awesome app',
        }}
      />
      <Stack.Screen
        name="Promotiondetails"
        component={Promotiondetails}
        options={{
          title: 'My profile',
        }}
      />
      <Stack.Screen
        name="MyDrawer"
        component={MyDrawer}
        options={{
          title: 'MyDrawer',
        }}
      />
       
    </Stack.Navigator>
  );
}
export default MyStack;
