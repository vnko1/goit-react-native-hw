import {
  collection,
  addDoc,
  onSnapshot,
  doc,
  // setDoc,
} from "firebase/firestore";
import { db } from "./config";

export const addPost = async (data) => {
  await addDoc(collection(db, "posts"), data);
};

export const getPosts = async (dispatch, getPostsSuccess) => {
  onSnapshot(collection(db, "posts"), (data) =>
    dispatch(
      getPostsSuccess(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    )
  );
};

export const addComments = async (data, id) => {
  console.log(data);
  console.log(id);
  addDoc(collection(db, "posts", id, "comments"), data);
};

// const userRef = doc(db, "users", `${data.uid}`, "posts", "post");
// await setDoc(userRef, data);
// export const getAllPosts = async (setPosts, uid) => {
//   onSnapshot(collection(db, uid), (data) =>
//     setPosts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
//   );
// };
