import { Camera } from "expo-camera";
import { useEffect, useState } from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const CameraScreen = ({ navigation }) => {
  const [cameraPermission, setHasCameraPermission] = useState(null);
  const [camera, setCamera] = useState(null);
  const [image, setImage] = useState(null);
  const [cameraType, setCameraType] = useState(Camera.Constants.Type.front);

  useEffect(() => {
    (async () => {
      const { status: cameraStatus } =
        await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(cameraStatus === "granted");
    })();
  });

  const takePhoto = async () => {
    const photo = await camera.takePictureAsync();

    setImage(photo.uri);
  };

  const addPhoto = () => navigation.navigate("Registration", { image });

  return (
    <View style={styles.container}>
      {cameraPermission && (
        <Camera ref={setCamera} style={styles.camera} type={cameraType}>
          {image && (
            <View style={styles.imageContainer}>
              <Image width={60} height={60} source={{ uri: image }} />
              <TouchableOpacity
                style={styles.addPhotoIconContainer}
                onPress={addPhoto}
              >
                <Ionicons name="add" size={20} color="black" />
              </TouchableOpacity>
            </View>
          )}
          <TouchableOpacity
            onPress={takePhoto}
            style={styles.takePhotoIconContainer}
          >
            <MaterialIcons name="camera" size={48} color="black" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              if (cameraType === 1) setCameraType(Camera.Constants.Type.front);
              else setCameraType(Camera.Constants.Type.back);
            }}
            style={styles.changeCameraIconContainer}
          >
            <Ionicons name="md-camera-reverse" size={48} color="black" />
          </TouchableOpacity>
        </Camera>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  camera: { flex: 1, position: "relative" },
  addPhotoIconContainer: {
    alignItems: "center",
    justifyContent: "center",

    borderRadius: 50,
    backgroundColor: "white",
    position: "absolute",
    bottom: -10,
    right: -10,
  },
  takePhotoIconContainer: {
    alignItems: "center",
    justifyContent: "center",
    bottom: 40,
    left: "50%",
    transform: [{ translateX: -25 }],
    width: 60,
    height: 60,
    borderRadius: 50,
    backgroundColor: "white",
    position: "absolute",
  },
  changeCameraIconContainer: {
    alignItems: "center",
    justifyContent: "center",
    bottom: 40,
    right: 20,
    width: 60,
    height: 60,
    borderRadius: 50,
    backgroundColor: "white",
    position: "absolute",
  },
  imageContainer: {
    backgroundColor: "white",
    position: "absolute",
    bottom: 40,
    left: 20,
  },
});

export default CameraScreen;
