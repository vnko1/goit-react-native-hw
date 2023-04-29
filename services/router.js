import { createStackNavigator } from "@react-navigation/stack";
import RegistrationScreen from "../screens/auth/RegistrationScreen";
import LoginScreen from "../screens/auth/LoginScreen";
import HomeScreen from "../screens/main/HomeScreen";
import LogOutButton from "../components/LogOutButton";

const MainStack = createStackNavigator();
export const router = (isLoged, setIsLoged) => {
  if (!isLoged) {
    return (
      <MainStack.Navigator initialRouteName="Registration">
        <MainStack.Screen
          name="Registration"
          component={RegistrationScreen}
          options={{ headerShown: false }}
        />
        <MainStack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
      </MainStack.Navigator>
    );
  } else {
    return (
      <MainStack.Navigator initialRouteName="Home">
        <MainStack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerRightContainerStyle: { padding: 16 },
            title: "Публикации",
            headerRight: () => <LogOutButton setIsLoged={setIsLoged} />,
          }}
        />
      </MainStack.Navigator>
    );
  }
};
