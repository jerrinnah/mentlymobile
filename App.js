import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import Unboarding from './screens/SplashScreen1/Unboarding/Unboarding';
import Unboarding2 from './screens/SplashScreen1/Unboarding/Unboarding2';
import Unboarding3 from './screens/SplashScreen1/Unboarding/Unboarding3';

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen here</Text>
    </View>
  );
}


const Stack = createNativeStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Unboarding" component={Unboarding} options={{headerShown:false}} />
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false}} />
        <Stack.Screen name="Unboarding2" component={Unboarding2} options={{headerShown:false}} />
        <Stack.Screen name="Unboarding3" component={Unboarding3} options={{headerShown:false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
