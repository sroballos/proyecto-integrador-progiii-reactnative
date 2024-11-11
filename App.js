import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import HomeMenu from "./src/screens/HomeMenu";
import Login from "./src/screens/Login";
import Profile from "./src/screens/Profile";
import Register from "./src/screens/Register";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeMenu} options={{headerShown: false}} />
        <Tab.Screen name="Register" component={Register} options={{headerShown: false}} />
        <Tab.Screen name="Login" component={Login} options={{headerShown: false}} />
        <Tab.Screen name="Profile" component={Profile} options={{headerShown: false}} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
