import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "./config";

export const addPost = async (data) => {
  try {
    const docRef = await addDoc(collection(db, "posts"), data);
    console.log(docRef);
  } catch (error) {
    console.log(error.message);
  }
};
