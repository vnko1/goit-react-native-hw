import { Text, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CreatePostsScreen from "./CreatePostsScreen";

const Tab = createBottomTabNavigator();

export default HomeScreen = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Settings" component={CreatePostsScreen} />
    </Tab.Navigator>
  );
};

// const styles = StyleSheet.create({
//   container: { flex: 1, backgroundColor: "#fff" },
// });
