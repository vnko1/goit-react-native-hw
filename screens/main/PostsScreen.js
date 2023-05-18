import { createStackNavigator } from "@react-navigation/stack";
import { AntDesign } from "@expo/vector-icons";
import InitialPostsScreen from "./nestedScreens/InitialPostsScreen";
import MapScreen from "./nestedScreens/MapScreen";
import CommentsScreen from "./nestedScreens/CommentsScreen";
import LogOutButton from "../../components/LogOutButton";
import { user } from "../../services/context";

const NestedStack = createStackNavigator();

export default PostsScreen = () => {
  const { setShowTabBar } = user();
  return (
    <NestedStack.Navigator
      screenListeners={{
        state: (e) =>
          e.data.state.routes.length > 1
            ? setShowTabBar(false)
            : setShowTabBar(true),
      }}
    >
      <NestedStack.Screen
        name="InitialPostsScreen"
        component={InitialPostsScreen}
        options={() => ({
          title: "Публикации",
          headerRightContainerStyle: { paddingRight: 16 },
          headerRight: () => <LogOutButton />,
          headerTitleContainerStyle: { paddingLeft: 16 },
        })}
      />
      <NestedStack.Screen
        name="Map"
        component={MapScreen}
        options={({ navigation }) => ({
          title: "Карты",
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
        })}
      />
      <NestedStack.Screen
        name="Comments"
        component={CommentsScreen}
        options={({ navigation }) => ({
          title: "Комментарии",
          headerLeft: () => (
            <AntDesign
              name="arrowleft"
              size={24}
              color="#212121cc"
              onPress={() => {
                navigation.goBack();
              }}
            />
          ),
          headerLeftContainerStyle: { paddingLeft: 16 },
          headerTitleContainerStyle: { paddingRight: 16 },
        })}
      />
    </NestedStack.Navigator>
  );
};
