export { auth, storage, db } from "./config";
export { addPostPhoto, addAvatarPhoto } from "./storageApi";
export {
  addPost,
  getPosts,
  addComment,
  getPostComments,
  getCommentsCount,
} from "./databaseApi";
