// import { createStackNavigator } from "@react-navigation/stack";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RegistrationScreen from "../screens/auth/RegistrationScreen";
import LoginScreen from "../screens/auth/LoginScreen";
import HomeScreen from "../screens/main/HomeScreen";
import CreatePostsScreen from "../screens/main/CreatePostsScreen";
import CommentsScreen from "../screens/main/CommentsScreen";

// const MainStack = createStackNavigator();
const Stack = createNativeStackNavigator();
export const router = (isLoged) => {
  return (
    <Stack.Navigator>
      {isLoged ? (
        <Stack.Group>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="CreatePosts" component={CreatePostsScreen} />
          <Stack.Screen
            name="Comments"
            component={CommentsScreen}
            options={{ headerShown: false }}
          />
        </Stack.Group>
      ) : (
        <Stack.Group>
          <Stack.Screen
            name="Registration"
            component={RegistrationScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{ headerShown: false }}
          />
        </Stack.Group>
      )}
    </Stack.Navigator>
  );

  // if (!isLoged) {
  //   return (
  //     <MainStack.Navigator initialRouteName="Registration">
  //       <MainStack.Screen
  //         name="Registration"
  //         component={RegistrationScreen}
  //         options={{ headerShown: false }}
  //       />
  //       <MainStack.Screen
  //         name="Login"
  //         component={LoginScreen}
  //         options={{ headerShown: false }}
  //       />
  //     </MainStack.Navigator>
  //   );
  // } else {
  //   return (
  //     <MainStack.Navigator initialRouteName="Home">
  //       <MainStack.Screen
  //         name="Home"
  //         component={HomeScreen}
  //         options={{ headerShown: false }}
  //       />
  //     </MainStack.Navigator>
  //   );
  // }
};
