import { Text, StyleSheet } from "react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import LogOutButton from "../../components/LogOutButton";
import CreatePostsScreen from "./CreatePostsScreen";
import CommentsScreen from "./CommentsScreen";
import PostsScreen from "./PostsScreen";

const Tab = createBottomTabNavigator();

export default HomeScreen = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Posts"
        component={PostsScreen}
        options={{
          title: "Публикации",
          headerRightContainerStyle: { paddingRight: 16 },
          headerRight: () => <LogOutButton />,
          headerTitleContainerStyle: { paddingLeft: 16 },
        }}
      />
      <Tab.Screen
        name="CreatePosts"
        component={CreatePostsScreen}
        options={{
          title: "Создать публикацию",
        }}
      />
      <Tab.Screen
        name="Comments"
        component={CommentsScreen}
        options={{ title: "Комментарии" }}
      />
    </Tab.Navigator>
  );
};

// const styles = StyleSheet.create({
//   container: { flex: 1, backgroundColor: "#fff" },
// });
