import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Main from "./screens/main";
import ListScreen from "./screens/listScreen";
import CreateEvent from "./screens/createEvent";
import DetailView from "./screens/detailViewScreen";
import "localstorage-polyfill";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Register" component={Main} />
        <Stack.Screen name="ListScreen" component={ListScreen} />
        <Stack.Screen name="CreateEvent" component={CreateEvent} />
        <Stack.Screen name="DetailView" component={DetailView} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
