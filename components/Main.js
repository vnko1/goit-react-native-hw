import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  NavigationContainer,
  useNavigationContainerRef,
} from "@react-navigation/native";
// import { UserContext } from "../services/context";
import { router } from "../services/router";
import { useAuth } from "../hooks/useAuth";
import { refreshUser } from "../redux/index";

const Main = ({ navigationRef }) => {
  // const navigationRef = useNavigationContainerRef();
  const { isLogedIn } = useAuth();
  const routing = router(isLogedIn);
  const dispatch = useDispatch();
  // const [isLoged, setIsLoged] = useState(false);
  // const [image, setImage] = useState(null);

  useEffect(() => {
    dispatch(refreshUser());
  }, [isLogedIn]);

  return (
    <NavigationContainer ref={navigationRef}>{routing}</NavigationContainer>
  );
};

export default Main;
