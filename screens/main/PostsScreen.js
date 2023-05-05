import { createStackNavigator } from "@react-navigation/stack";
import InitialPostsScreen from "./nestedScreens/InitialPostsScreen";
import MapScreen from "./nestedScreens/MapScreen";
import CommentsScreen from "./nestedScreens/CommentsScreen";
const NestedStack = createStackNavigator();

export default PostsScreen = () => {
  return (
    <NestedStack.Navigator>
      <NestedStack.Screen
        name="DefaultPostsScreen"
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
        options={() => ({
          title: "Карты",
        })}
      />
      <NestedStack.Screen
        name="Comments"
        component={CommentsScreen}
        options={() => ({
          title: "Комментарии",
        })}
      />
    </NestedStack.Navigator>
  );
};
