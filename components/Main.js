import { useState } from "react";

import {
  NavigationContainer,
  useNavigationContainerRef,
} from "@react-navigation/native";
import { UserContext } from "../services/context";
import { useRoute } from "../services/router";
import { useAuth } from "../hooks/useAuth";

const Main = () => {
  const { isLogedIn } = useAuth();
  const [showTabBar, setShowTabBar] = useState(true);
  const routing = useRoute(isLogedIn);

  // useEffect(() => {
  //   if (isLogedIn) dispatch(refreshUser());
  // }, [isLogedIn]);

  return (
    <UserContext.Provider value={{ showTabBar, setShowTabBar }}>
      <NavigationContainer>{routing}</NavigationContainer>
    </UserContext.Provider>
  );
};

export default Main;
