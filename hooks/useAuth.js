import { useSelector } from "react-redux";
import {
  selectDisplayName,
  selectPhotoURL,
  selectUid,
  selectAccessToken,
  selectIsLogedIn,
  selectIsLoading,
  selectError,
  selectEmail,
} from "../redux/auth";

export const useAuth = () => {
  const email = useSelector(selectEmail);
  const displayName = useSelector(selectDisplayName);
  const photoURL = useSelector(selectPhotoURL);
  const uid = useSelector(selectUid);
  const token = useSelector(selectAccessToken);
  const isLogedIn = useSelector(selectIsLogedIn);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  return {
    email,
    displayName,
    photoURL,
    uid,
    token,
    isLogedIn,
    isLoading,
    error,
  };
};
