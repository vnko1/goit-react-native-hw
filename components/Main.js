import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  NavigationContainer,
  useNavigationContainerRef,
} from "@react-navigation/native";
import { UserContext } from "../services/context";
import { router } from "../services/router";
import { useAuth } from "../hooks/useAuth";
import { refreshUser } from "../redux";

const Main = () => {
  const navigationRef = useNavigationContainerRef();
  const { isLogedIn } = useAuth();
  const routing = router(isLogedIn);
  const dispatch = useDispatch();
  // const [isLoged, setIsLoged] = useState(false);
  // const [image, setImage] = useState(null);

  useEffect(() => {
    dispatch(refreshUser());
  }, []);

  return (
    <UserContext.Provider value={{ navigationRef }}>
      <NavigationContainer ref={navigationRef}>{routing}</NavigationContainer>
    </UserContext.Provider>
  );
};

export default Main;
