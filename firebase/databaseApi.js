import { collection, addDoc, onSnapshot } from "firebase/firestore";
import { db } from "./config";

export const addPost = async (data) => {
  try {
    await addDoc(collection(db, "usersPosts"), data);
  } catch (error) {
    console.log(error.message);
  }
};

export const getAllPosts = async (setPosts) => {
  onSnapshot(collection(db, "usersPosts"), (data) =>
    setPosts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
  );
};
