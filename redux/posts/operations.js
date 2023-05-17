import { getPosts, getComments } from "../../firebase/";
import {
  getPostsPending,
  getPostsResolved,
  getPostsError,
  getCommentsPending,
  getCommentsResolved,
  getCommentsError,
} from "./postsSlice";

export const getAllPosts = () => async (dispatch) => {
  dispatch(getPostsPending());
  try {
    await getPosts(dispatch, getPostsResolved);
  } catch (error) {
    dispatch(getPostsError(error.message));
  }
};

export const getAllComents = () => async (dispatch) => {
  dispatch(getCommentsPending());
  try {
    await getComments(dispatch, getCommentsResolved);
  } catch (error) {
    dispatch(getCommentsError(error.message));
  }
};

export const getCollection = () => async (dispatch) => {};
