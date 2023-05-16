import { useEffect, useState } from "react";

import { NavigationContainer } from "@react-navigation/native";
import { UserContext } from "../services/context";
import { useRoute } from "../services/router";
import { useAuth } from "../hooks/useAuth";
import { useDispatch } from "react-redux";
import { refreshUser } from "../redux/index";

const Main = () => {
  const { isLogedIn } = useAuth();
  const [showTabBar, setShowTabBar] = useState(true);
  const routing = useRoute(isLogedIn);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, []);

  return (
    <UserContext.Provider value={{ showTabBar, setShowTabBar }}>
      <NavigationContainer>{routing}</NavigationContainer>
    </UserContext.Provider>
  );
};

export default Main;
