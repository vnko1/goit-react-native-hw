import { useSelector } from "react-redux";
import {
  selectPosts,
  selectIsLoading,
  selectError,
  selectComments,
} from "../redux/posts";

export const usePosts = () => {
  const posts = useSelector(selectPosts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const comments = useSelector(selectComments);
  return { posts, isLoading, error, comments };
};
