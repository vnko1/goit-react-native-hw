import { getPosts } from "../../firebase/";
import { getPostsPending, getPostsResolved, getPostsError } from "./postsSlice";

export const getAllPosts = () => async (dispatch) => {
  dispatch(getPostsPending());
  try {
    await getPosts(dispatch, getPostsResolved);
  } catch (error) {
    dispatch(getPostsError(error.message));
  }
};
