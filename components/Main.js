import { useEffect, useState } from "react";

import { NavigationContainer } from "@react-navigation/native";
import { UserContext } from "../services/context";
import { useRoute } from "../services/router";
import { useAuth } from "../hooks/useAuth";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";

const Main = () => {
  const { isLogedIn } = useAuth();
  const [showTabBar, setShowTabBar] = useState(true);
  const routing = useRoute(isLogedIn);

  // useEffect(() => {
  //   if (isLogedIn) dispatch(refreshUser());
  // }, [isLogedIn]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log(user);
    });
  }, [isLogedIn]);

  return (
    <UserContext.Provider value={{ showTabBar, setShowTabBar }}>
      <NavigationContainer>{routing}</NavigationContainer>
    </UserContext.Provider>
  );
};

export default Main;
