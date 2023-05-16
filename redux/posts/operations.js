import { getPosts } from "../../firebase/";
import { getPostsPending, getPostsSuccess, getPostsError } from "./postsSlice";

export const getAllPosts = () => async (dispatch) => {
  dispatch(getPostsPending());
  try {
    await getPosts(dispatch, getPostsSuccess);
  } catch (error) {
    dispatch(getPostsError(error.message));
  }
};
