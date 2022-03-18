import HomeScreen from "./screens/HomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DetailsScreen from "./screens/DetailsScreen";
import WelcomeScreen from "./screens/WelcomeScreen";
import AllCarsScreen from "./screens/AllCarsScreen";

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Welcome' component={WelcomeScreen} options={{ title: 'Cars App' }} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Home' }}/>
        <Stack.Screen name="All" component={AllCarsScreen} options={{ title: 'All Cars' }}/>
        <Stack.Screen name="Details" component={DetailsScreen} options={{ title: 'Detalhes' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
