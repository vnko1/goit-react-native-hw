import { useSelector } from "react-redux";
import {
  selectIsLoading,
  selectError,
  selectComments,
} from "../redux/comments";

export const useComments = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const comments = useSelector(selectComments);
  return { isLoading, error, comments };
};
