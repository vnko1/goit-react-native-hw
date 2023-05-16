import {
  collection,
  addDoc,
  onSnapshot,
  // doc,
  // setDoc,
} from "firebase/firestore";
import { db } from "./config";

export const addPost = async (data) => {
  // const userRef = doc(db, "users", `${data.uid}`, "posts", "post");
  // await setDoc(userRef, data);
  try {
    await addDoc(collection(db, data.uid), data);
  } catch (error) {
    console.log(error.message);
  }
};

export const getAllPosts = async (setPosts, uid) => {
  onSnapshot(collection(db, uid), (data) =>
    setPosts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
  );
};
