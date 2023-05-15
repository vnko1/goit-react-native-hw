import { createStackNavigator } from "@react-navigation/stack";
import RegistrationScreen from "../screens/auth/RegistrationScreen";
import LoginScreen from "../screens/auth/LoginScreen";
import HomeScreen from "../screens/main/HomeScreen";
import CameraScreen from "../screens/auth/CameraScreen";
import { AntDesign } from "@expo/vector-icons";

const MainStack = createStackNavigator();

export const router = (isLoged) => {
  if (!isLoged) {
    return (
      <MainStack.Navigator initialRouteName="Login">
        <MainStack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <MainStack.Screen
          name="Registration"
          component={RegistrationScreen}
          options={{ headerShown: false }}
        />
        <MainStack.Screen
          name="Camera"
          component={CameraScreen}
          options={({ navigation }) => ({
            title: "Камера",
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
      </MainStack.Navigator>
    );
  } else {
    return (
      <MainStack.Navigator initialRouteName="Home">
        <MainStack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
      </MainStack.Navigator>
    );
  }
};
