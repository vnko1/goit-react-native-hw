import { uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../firebase/config";
import { ref } from "firebase/storage";

const uploadPhotoToServer = async ({ photo, imageId }) => {
  try {
    const response = await fetch(photo);
    const file = await response.blob();
    const imageRef = ref(storage, `avatar/${imageId}.jpg`);
    const metadata = {
      contentType: "image/jpeg",
      name: "avatar",
    };
    await uploadBytes(imageRef, file, metadata);
  } catch (error) {
    console.log(error.message);
  }
};

const downloadPhotoFromServer = async (imageId) => {
  try {
    const imageUrl = await getDownloadURL(
      ref(storage, `avatar/${imageId}.jpg`)
    );
    return imageUrl;
  } catch (error) {
    console.log(error.message);
  }
};

const uploadPostPhotoToServer = async ({ photo, imageId }) => {
  try {
    const response = await fetch(photo);
    const file = await response.blob();
    const imageRef = ref(storage, `postImage/${imageId}.jpg`);
    const metadata = {
      contentType: "image/jpeg",
      name: "avatar",
    };
    await uploadBytes(imageRef, file, metadata);
  } catch (error) {
    console.log(error.message);
  }
};

const downloadPostPhotoFromServer = async (imageId) => {
  try {
    const imageUrl = await getDownloadURL(
      ref(storage, `postImage/${imageId}.jpg`)
    );
    return imageUrl;
  } catch (error) {
    console.log(error.message);
  }
};

export const addAvatarPhoto = async ({ photo, imageId }) => {
  await uploadPhotoToServer({ photo, imageId });
  const imageUrl = await downloadPhotoFromServer(imageId);
  return imageUrl;
};

export const addPostPhoto = async ({ photo, imageId }) => {
  await uploadPostPhotoToServer({ photo, imageId });
  const imageUrl = await downloadPostPhotoFromServer(imageId);
  return imageUrl;
};
