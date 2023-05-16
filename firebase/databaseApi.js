import { collection, addDoc, getDocs, onSnapshot } from "firebase/firestore";
import { db } from "./config";

export const addPost = async (data) => {
  try {
    const docRef = await addDoc(collection(db, "posts"), data);
  } catch (error) {
    console.log(error.message);
  }
};

export const getPosts = async (setPosts) => {
  const querySnapshot = await getDocs(collection(db, "posts"));

  querySnapshot.forEach((doc) =>
    setPosts((state) => [...state, { ...doc.data(), id: doc.id }])
  );
};

export const getAllPosts = async () => {
  onSnapshot(doc(db, "posts"), (doc) => {
    console.log("Current data: ", doc.data());
  });
};
