import { Text, StyleSheet, TouchableWithoutFeedback } from "react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

import LogOutButton from "../../components/LogOutButton";
import CreatePostsScreen from "./CreatePostsScreen";
import CommentsScreen from "./CommentsScreen";
import PostsScreen from "./PostsScreen";

const Tab = createBottomTabNavigator();

export default HomeScreen = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{ showLabel: false }}
      screenOptions={{ tabBarIconStyle: { height: 40, marginTop: 9 } }}
    >
      <Tab.Screen
        name="Posts"
        component={PostsScreen}
        options={() => ({
          title: "Публикации",
          headerRightContainerStyle: { paddingRight: 16 },
          headerRight: () => <LogOutButton />,
          headerTitleContainerStyle: { paddingLeft: 16 },
          tabBarIcon: ({ _, size }) => (
            <Ionicons name="ios-grid-outline" size={size} color="#212121cc" />
          ),
        })}
      />
      <Tab.Screen
        name="CreatePosts"
        component={CreatePostsScreen}
        options={({ navigation }) => ({
          tabBarStyle: { display: "none" },
          title: "Создать публикацию",
          headerLeft: () => (
            <AntDesign
              name="arrowleft"
              size={24}
              color="#212121cc"
              onPress={() => navigation.goBack()}
            />
          ),
          headerLeftContainerStyle: { paddingLeft: 16 },
          headerTitleContainerStyle: { paddingRight: 16 },
          tabBarIconStyle: {
            backgroundColor: "#FF6C00",
            marginTop: 9,
            width: 70,
            borderRadius: 20,
          },
          tabBarIcon: ({ _, size }) => (
            <AntDesign name="plus" size={size} color="#fff" />
          ),
        })}
      />
      <Tab.Screen
        name="Comments"
        component={CommentsScreen}
        options={({ navigation }) => ({
          tabBarStyle: { display: "none" },
          title: "Комментарии",
          headerLeft: () => (
            <AntDesign
              name="arrowleft"
              size={24}
              color="#212121cc"
              onPress={() => navigation.goBack()}
            />
          ),
          headerLeftContainerStyle: { paddingLeft: 16 },
          headerTitleContainerStyle: { paddingRight: 16 },
          tabBarIcon: ({ _, size }) => (
            <AntDesign name="user" size={size} color="#212121cc" />
          ),
        })}
      />
    </Tab.Navigator>
  );
};
