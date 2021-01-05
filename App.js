import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './screens/Login';
import Home from './screens/Home';
import SignUp from './screens/SignUp';

import Profile from './screens/Profile';
import Message from './screens/Message';

const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Profile">
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{
            title: 'Profile', 
            headerStyle: {
              backgroundColor: '#f4db1e',
            }, 
          }}
        />
        <Stack.Screen
          name="Message"
          component={Message}
          options={{
            title: 'Message', 
            headerStyle: {
              backgroundColor: '#f4db1e', 
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;


// const MainNavigator = () => {
//   return (
//     <Main.Navigator headerMode='none'>
//       <Main.Screen name='SignUp' component={SignUp} />
//       <Main.Screen name='Login' component={Login} />
//       <Main.Screen name='Home' component={Home} />
//     </Main.Navigator>
//   );
// };

// export default function App() {
//   return (
//     <NavigationContainer>
//       <MainNavigator />
//     </NavigationContainer>
//   );
// }
