import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./src/screens/HomeScreen";
import ChurchPrayers from "./src/screens/ChurchPrayers";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          options={{ headerShown: false }}
          name="Mis oraciones"
          component={HomeScreen}
        />
        <Tab.Screen
          options={{ headerShown: false }}
          name="Nuestras oraciones"
          component={ChurchPrayers}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
