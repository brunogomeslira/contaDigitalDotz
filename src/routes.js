import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {useSelector} from 'react-redux';
import React, {useState, useEffect} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import auth from '@react-native-firebase/auth';

import Login from './pages/Login';
import Home from './pages/Home';
import Extratos from './pages/Extratos';
import Cartoes from './pages/Cartoes';
import Conversor from './pages/Conversor';
import Boletos from './pages/Boletos';

const Stack = createStackNavigator();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'white',
  },
};

const Routes = () => {
  const state = useSelector((s) => s.auth);

  const [initializing, setInitializing] = useState(true);

  function onAuthStateChanged(state) {
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  if (initializing) return null;

  return (
    <SafeAreaProvider>
      <NavigationContainer theme={MyTheme}>
        <Stack.Navigator headerMode={'none'}>
          {state.userToken == null ? (
            <>
              <Stack.Screen name="Login" component={Login} />
            </>
          ) : (
            <>
              <Stack.Screen name="Home" component={Home} />
              <Stack.Screen name="Extratos" component={Extratos} />
              <Stack.Screen name="Cartoes" component={Cartoes} />
              <Stack.Screen name="Conversor" component={Conversor} />
              <Stack.Screen name="Boletos" component={Boletos} />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default Routes;
