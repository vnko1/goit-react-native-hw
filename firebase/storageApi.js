import { uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../firebase/config";
import { ref } from "firebase/storage";

export const uploadPhotoToServer = async ({ photo, imageId }) => {
  try {
    const image = await fetch(photo);
    const file = image.blob();
    const imageRef = ref(storage, `avatar/${imageId}`);
    await uploadBytes(imageRef, file);
  } catch (error) {
    console.log(error.message);
  }
};

export const downloadPhotoFromServer = async (imageId) => {
  try {
    const imageUrl = await getDownloadURL(ref(storage, `avatar/${imageId}`));

    return imageUrl;
  } catch (error) {
    console.log(error.message);
  }
};
