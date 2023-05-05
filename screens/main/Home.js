import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import LogOutButton from "../../components/LogOutButton";
import CreatePostsScreen from "./CreatePostsScreen";
import ProfileScreen from "./ProfileScreen";
import PostsScreen from "./PostsScreen";

const Tab = createBottomTabNavigator();

export default HomeScreen = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: [
          {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            alignSelf: "center",
            marginBottom: 5,
          },
          null,
        ],
        tabBarIconStyle: { height: 40, marginTop: 9 },
      }}
    >
      <Tab.Screen
        name="Posts"
        component={PostsScreen}
        options={() => ({
          headerShown: false,
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
        component={ProfileScreen}
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
