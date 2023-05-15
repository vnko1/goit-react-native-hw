import "react-native-gesture-handler";
import { useFonts } from "expo-font";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { useNavigationContainerRef } from "@react-navigation/native";
import { store, persistStor } from "./redux/index";
import Main from "./components/Main";
import { UserContext } from "./services/context";

export default function App() {
  const navigationRef = useNavigationContainerRef();
  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <UserContext.Provider value={{ navigationRef }}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistStor}>
          <Main navigationRef={navigationRef} />
        </PersistGate>
      </Provider>
    </UserContext.Provider>
  );
}
