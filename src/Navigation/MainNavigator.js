import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../Screens/Home';
import ProfileSreen from '../Screens/Profile';


const Stack = createStackNavigator();
const hederCenter = {
  headerTitleAlign: 'center'
}
  export default function MainNavigator(){
   
      return(
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} options={hederCenter}  />
            <Stack.Screen name="Profile" component={ProfileSreen}  options={({ route }) => ({ title: route.params.title ,headerTitleAlign: 'center'})}/>
        </Stack.Navigator>
      )
  }
  