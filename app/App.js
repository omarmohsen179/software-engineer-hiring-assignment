import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Apartments from "./screens/Apartments";
import Apartment from "./screens/Apartment";
export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Apartments">
        <Stack.Screen name="Apartments" component={Apartments} />
        <Stack.Screen name="Apartment" component={Apartment} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
