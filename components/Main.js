import { useState } from "react";
import {
  NavigationContainer,
  useNavigationContainerRef,
} from "@react-navigation/native";
import { UserContext } from "../services/context";
import { router } from "../services/router";
import { useAuth } from "../hooks/useAuth";

const Main = () => {
  const navigationRef = useNavigationContainerRef();
  const { isLogedIn } = useAuth();
  const [isLoged, setIsLoged] = useState(false);
  const [image, setImage] = useState(null);

  const routing = router(isLogedIn);
  return (
    <UserContext.Provider value={{ navigationRef }}>
      <NavigationContainer ref={navigationRef}>{routing}</NavigationContainer>
    </UserContext.Provider>
  );
};

export default Main;
