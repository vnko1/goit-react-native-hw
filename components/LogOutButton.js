import { user } from "../services/context";

import { TouchableOpacity } from "react-native";
import { LogOutIcon } from "./LogOutIcon";
import { useNavigation } from "@react-navigation/native";

export default LogOutButton = () => {
  const navigation = useNavigation();
  const { setIsLoged } = user();

  return (
    <TouchableOpacity
      onPress={() => {
        setIsLoged(false);
      }}
    >
      <LogOutIcon />
    </TouchableOpacity>
  );
};
