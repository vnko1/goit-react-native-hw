import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../firebase/config";
import { addAvatarPhoto } from "../firebase";
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
        if (image) imageUrl = await addAvatarPhoto({ photo: image, imageId });

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

export const refreshUser = () => (dispatch) => {
  onAuthStateChanged(auth, async (user) => {
    if (user) {
      dispatch(refreshInProgress());
      const accessToken = await user.getIdToken();
      try {
        const userState = {
          displayName: user.displayName,
          photoURL: user.photoURL,
          email: user.email,
          uid: user.uid,
          accessToken,
        };

        dispatch(refreshSuccess(userState));
      } catch (error) {
        dispatch(refreshError(error.message));
      }
    } else {
      dispatch(logOutInProgress());
      dispatch(logOutSuccess());
      try {
      } catch (error) {
        dispatch(logOutError(error.message));
      }
    }
  });
};
