import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firebase/config";
import { downloadPhotoFromServer, uploadPhotoToServer } from "../firebase";
import { signIn } from "./authSlice";

export const registerUser =
  ({ email, password, name, image }) =>
  async (dispatch, getState) => {
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
          uid: user.uid,
          accessToken,
        };
        console.log(userState);
        dispatch(signIn(userState));
      }
    } catch (error) {
      console.log(error.message);
    }
  };
