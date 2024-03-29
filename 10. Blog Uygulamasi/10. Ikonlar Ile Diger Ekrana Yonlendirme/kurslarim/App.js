import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import IndexScreen from './screens/IndexScreen';
import CreateScreen from './screens/CreateScreen';
import { Provider } from './context/BlogContext';
import ShowScreen from './screens/ShowScreen';
import { AntDesign, EvilIcons } from '@expo/vector-icons';
import EditScreen from './screens/EditScreen';


const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <Provider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerTitle: 'Blok Uygulaması' }}>
          <Stack.Screen name="Index" component={IndexScreen} options={({ navigation }) => ({
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.navigate('Create')}>
                <AntDesign name="plus" size={24} color="black" />
              </TouchableOpacity>

            )

          })} />
          <Stack.Screen name="Create" component={CreateScreen} />
          <Stack.Screen name="Show" component={ShowScreen} options={({ navigation }) => ({
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.navigate('Edit')}>
                <EvilIcons name="pencil" size={24} color="black" />
              </TouchableOpacity>
            )

          })} />
          <Stack.Screen name="Edit" component={EditScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 20,
    width: 20,
    backgroundColor: 'red'
  }

});
