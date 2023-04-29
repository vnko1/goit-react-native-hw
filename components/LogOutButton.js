import { TouchableOpacity } from "react-native";
import { LogOutIcon } from "./LogOutIcon";

export default LogOutButton = ({ setIsLoged }) => {
  return (
    <TouchableOpacity onPress={() => setIsLoged(false)}>
      <LogOutIcon />
    </TouchableOpacity>
  );
};
