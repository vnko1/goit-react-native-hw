import { user } from "../services/context";

import { TouchableOpacity } from "react-native";
import { LogOutIcon } from "./LogOutIcon";

export default LogOutButton = () => {
  const { setIsLoged } = user();

  return (
    <TouchableOpacity onPress={() => setIsLoged(false)}>
      <LogOutIcon />
    </TouchableOpacity>
  );
};
