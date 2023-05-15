import { useSelector } from "react-redux";
import {
  selectDisplayName,
  selectPhotoUrl,
  selectUid,
  selectAccessToken,
  selectIsLogedIn,
  selectIsLoading,
  selectError,
} from "../redux/index";

export const useAuth = () => {
  const displayName = useSelector(selectDisplayName);
  const photoURL = useSelector(selectPhotoUrl);
  const uid = useSelector(selectUid);
  const token = useSelector(selectAccessToken);
  const isLogedIn = useSelector(selectIsLogedIn);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  return { displayName, photoURL, uid, token, isLogedIn, isLoading, error };
};
