import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { uploadBytes, getDownloadURL } from "firebase/storage";
import { auth, storage, app } from "../firebase/config";
import { ref } from "firebase/storage";
import { nanoid } from "@reduxjs/toolkit";
import {} from "./authSlice";

export const avatarsRef = ref(storage, `avatar`);

// const register =
//   ({ email, password, name }) =>
//   async () => {};

// createUserWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed in
//     const user = userCredential.user;
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // ..
//   });

export const reg = async ({ email, password, name, image }) => {
  try {
    // await createUserWithEmailAndPassword(auth, email, password);
    sendPhotoToServer(image);

    // await updateProfile(auth.currentUser, {
    //   displayName: name,
    //     photoURL: "https://example.com/jane-q-user/profile.jpg",
    // });
    // const response = auth.currentUser;
    // console.log(response);
  } catch (error) {
    console.log(error.message);
  }
  // .then((userCredential) => {
  //   // Signed in
  //   const user = userCredential.user;
  //   // ...
  // })
  // .catch((error) => {
  //   const errorCode = error.code;
  //   const errorMessage = error.message;
  //   // ..
  // });
};

const sendPhotoToServer = async () => {
  const photo = await fetch(image);
  const file = photo.blob();
  const res = await uploadBytes(avatarsRef, file);

  const doc = getDownloadURL(ref(storage, "avatar"));
  console.log(doc);
};
