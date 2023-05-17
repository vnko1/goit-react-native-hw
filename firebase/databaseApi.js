import {
  collection,
  addDoc,
  onSnapshot,
  doc,
  setDoc,
  collectionGroup,
  query,
  where,
  getDocs,
  orderBy,
} from "firebase/firestore";
import { db } from "./config";

export const addPost = async (data) => {
  await addDoc(collection(db, "posts"), data);
};

export const getPosts = async (dispatch, getPostsResolved) => {
  onSnapshot(collection(db, "posts"), (data) =>
    dispatch(
      getPostsResolved(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    )
  );
};

export const addComment = async (data, id) => {
  addDoc(collection(db, "posts", id, "comments"), data);
};

export const getPostComments = async (id, dispatch, getCommentsResolved) => {
  const q = query(
    collection(db, "posts", id, "comments"),
    orderBy("creadetAt")
  );
  const postComments = collection(db, "posts", id, "comments");
  onSnapshot(q, (data) =>
    dispatch(
      getCommentsResolved(
        data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      )
    )
  );
};

// export const getComments = async (dispatch, getCommentsResolved) => {
//   const allPosts = query(collectionGroup(db, "comments"));
//   onSnapshot(allPosts, (data) =>
//     dispatch(
//       getCommentsResolved(
//         data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
//       )
//     )
//   );
// };

// const querySnapshot = await getDocs(allPosts);
// querySnapshot.forEach((doc) => {
//   console.log(doc.id, " => ", doc.data());
// });

// const userRef = doc(db, "users", `${data.uid}`, "posts", "post");
// await setDoc(userRef, data);
// export const getAllPosts = async (setPosts, uid) => {
//   onSnapshot(collection(db, uid), (data) =>
//     setPosts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
//   );
// };
