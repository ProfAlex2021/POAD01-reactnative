import 'react-native-gesture-handler';
import * as React from 'react';
import { Button, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" options={{ title : "Home" }} component={HomeScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>

    </NavigationContainer>
  );
}

const HomeScreen = ({ navigation }) => {
  return(
    <Button
     title="Vamos para a página do Luís"
     onPress={() =>
     navigation.navigate('Profile', { name: 'Luís Ernani' }) 
    } />
  );
}

const ProfileScreen = ({ navigation, route}) => {
  return(
    <Text>Rota usada: {route.params.name}</Text>
  );
}

export default App;