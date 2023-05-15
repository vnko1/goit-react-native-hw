import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../firebase/config";
import { downloadPhotoFromServer, uploadPhotoToServer } from "../firebase";
import {
  signInInProgress,
  signInSuccess,
  signInError,
  logInInProgress,
  logInSuccess,
  logInError,
  logOutInProgress,
  logOutSuccess,
  logOutError,
  refreshInProgress,
  refreshSuccess,
  refreshError,
} from "./authSlice";

export const registerUser =
  ({ email, password, name, image }) =>
  async (dispatch) => {
    dispatch(signInInProgress());
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;

      if (user) {
        const imageId = user.uid;

        let imageUrl = null;
        if (image) {
          await uploadPhotoToServer({ photo: image, imageId });
          imageUrl = await downloadPhotoFromServer(imageId);
        }

        await updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: imageUrl,
        });

        const accessToken = await user.getIdToken();
        const userState = {
          displayName: user.displayName,
          photoURL: user.photoURL,
          email: user.email,
          uid: user.uid,
          accessToken,
        };

        dispatch(signInSuccess(userState));
      }
    } catch (error) {
      dispatch(signInError(error.message));
    }
  };

export const logInUser =
  ({ email, password }) =>
  async (dispatch) => {
    dispatch(logInInProgress());
    try {
      await signInWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;
      if (user) {
        const accessToken = await user.getIdToken();

        const userState = {
          displayName: user.displayName,
          photoURL: user.photoURL,
          email: user.email,
          uid: user.uid,
          accessToken,
        };

        dispatch(logInSuccess(userState));
      }
    } catch (error) {
      dispatch(logInError(error.message));
    }
  };

export const logOutUser = () => async (dispatch) => {
  dispatch(logOutInProgress());
  try {
    await signOut(auth);
    dispatch(logOutSuccess());
  } catch (error) {
    dispatch(logOutError(error.message));
  }
};

export const refreshUser = () => async (dispatch) => {
  dispatch(refreshInProgress());

  onAuthStateChanged(auth, (user) => {
    console.log(user);
    if (user) {
      // const accessToken = user.getIdToken();
      const userState = {
        displayName: user.displayName,
        photoURL: user.photoURL,
        email: user.email,
        uid: user.uid,
        accessToken: user.accessToken,
      };

      dispatch(refreshSuccess(userState));
    }
  });
};
