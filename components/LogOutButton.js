import { useDispatch } from "react-redux";
import { TouchableOpacity } from "react-native";
import { logOutUser } from "../redux/auth";
import { LogOutIcon } from "./LogOutIcon";

export default LogOutButton = () => {
  const dispatch = useDispatch();

  return (
    <TouchableOpacity onPress={() => dispatch(logOutUser())}>
      <LogOutIcon />
    </TouchableOpacity>
  );
};
