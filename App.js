import "react-native-gesture-handler";
import { useFonts } from "expo-font";
import { useState } from "react";
import {
  NavigationContainer,
  useNavigationContainerRef,
} from "@react-navigation/native";
import { Provider } from "react-redux";

import { router } from "./services/router";
import { UserContext } from "./services/context";
import { store } from "./redux/store";

export default function App() {
  const navigationRef = useNavigationContainerRef();
  const [isLoged, setIsLoged] = useState(false);
  const [image, setImage] = useState(null);

  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  const routing = router(isLoged, setIsLoged);

  return (
    <Provider store={store}>
      <UserContext.Provider
        value={{ isLoged, setIsLoged, image, setImage, navigationRef }}
      >
        <NavigationContainer ref={navigationRef}>{routing}</NavigationContainer>
      </UserContext.Provider>
    </Provider>
  );
}
