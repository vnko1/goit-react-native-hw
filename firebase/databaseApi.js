import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "./config";

export const addPost = async (data) => {
  try {
    const docRef = await addDoc(collection(db, "posts"), data);
  } catch (error) {
    console.log(error.message);
  }
};

export const getAllPosts = async (setPosts) => {
  const querySnapshot = await getDocs(collection(db, "posts"));

  querySnapshot.forEach((doc) =>
    setPosts((state) => [...state, { ...doc.data(), id: doc.id }])
  );
};
