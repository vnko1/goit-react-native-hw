import { uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../firebase/config";
import { ref } from "firebase/storage";

export const uploadPhotoToServer = async ({ photo, imageId }) => {
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

export const downloadPhotoFromServer = async (imageId) => {
  try {
    const imageUrl = await getDownloadURL(
      ref(storage, `avatar/${imageId}.jpg`)
    );
    return imageUrl;
  } catch (error) {
    console.log(error.message);
  }
};
