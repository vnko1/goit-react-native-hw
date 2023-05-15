import { useDispatch } from "react-redux";
import { logOutUser } from "../redux/index";
import { TouchableOpacity } from "react-native";
import { LogOutIcon } from "./LogOutIcon";

export default LogOutButton = () => {
  const dispatch = useDispatch();

  return (
    <TouchableOpacity onPress={() => dispatch(logOutUser())}>
      <LogOutIcon />
    </TouchableOpacity>
  );
};
