import { useState } from "react";
import {
  NavigationContainer,
  useNavigationContainerRef,
} from "@react-navigation/native";
import { UserContext, router } from "../services";
import { useAuth } from "../hooks/useAuth";

const Main = () => {
  const navigationRef = useNavigationContainerRef();
  const { isLogedIn } = useAuth();
  const [isLoged, setIsLoged] = useState(false);
  const [image, setImage] = useState(null);

  const routing = router(isLogedIn);
  return (
    <UserContext.Provider
      value={{ isLoged, setIsLoged, image, setImage, navigationRef }}
    >
      <NavigationContainer ref={navigationRef}>{routing}</NavigationContainer>
    </UserContext.Provider>
  );
};

export default Main;
