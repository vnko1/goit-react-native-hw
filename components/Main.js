import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  NavigationContainer,
  useNavigationContainerRef,
} from "@react-navigation/native";
import { UserContext } from "../services/context";
import { router } from "../services/router";
import { useAuth } from "../hooks/useAuth";
import { refreshUser } from "../redux/index";

const Main = () => {
  const navigationRef = useNavigationContainerRef();
  const { isLogedIn } = useAuth();
  const routing = router(isLogedIn);
  const dispatch = useDispatch();

  const [showTabBar, setShowTabBar] = useState(true);

  useEffect(() => {
    if (isLogedIn) dispatch(refreshUser());
  }, [isLogedIn]);

  useEffect(() => {
    if (navigationRef.isReady()) {
      if (
        navigationRef.getCurrentRoute()?.name === "Map" ||
        navigationRef.getCurrentRoute()?.name === "Comments"
      ) {
        setShowTabBar(false);
      }
    }
  }, [navigationRef.getCurrentRoute(), navigationRef.isReady()]);

  return (
    <UserContext.Provider value={{ showTabBar }}>
      <NavigationContainer ref={navigationRef}>{routing}</NavigationContainer>
    </UserContext.Provider>
  );
};

export default Main;
