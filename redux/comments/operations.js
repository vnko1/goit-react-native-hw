import { getPostComments } from "../../firebase/";
import {
  getCommentsPending,
  getCommentsResolved,
  getCommentsError,
} from "./commentsSlice";

export const getAllPostComments = (id) => async (dispatch) => {
  dispatch(getCommentsPending());
  try {
    await getPostComments(id, dispatch, getCommentsResolved);
  } catch (error) {
    dispatch(getCommentsError(error.message));
  }
};
