export { app, auth, storage, db } from "./config";
export {
  downloadPhotoFromServer,
  uploadPhotoToServer,
  addPostPhoto,
} from "./storageApi";
export { addPost, getPosts, getAllPosts } from "./databaseApi";
