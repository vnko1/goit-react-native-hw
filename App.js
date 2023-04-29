import "react-native-gesture-handler";
import { useFonts } from "expo-font";
import { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";

import { router } from "./services/router";

import { UserContext } from "./services/context";

export default function App() {
  const [isLoged, setIsLoged] = useState(false);

  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  const routing = router(isLoged, setIsLoged);

  return (
    <UserContext.Provider value={{ isLoged, setIsLoged }}>
      <NavigationContainer>{routing}</NavigationContainer>
    </UserContext.Provider>
  );
  // return <CreatePostsScreen />;
}
