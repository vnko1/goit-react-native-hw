import { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  useWindowDimensions,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
  ActivityIndicator,
} from "react-native";
import { Camera } from "expo-camera";
import * as Location from "expo-location";
import { Entypo, Feather } from "@expo/vector-icons";

export default CreatePostsScreen = ({ navigation }) => {
  const { width } = useWindowDimensions();
  const [cameraPermission, setHasCameraPermission] = useState(null);
  const [locationPermission, setHasLocationPermission] = useState(null);
  const [camera, setCamera] = useState(null);
  const [image, setImage] = useState(null);
  const [titleValue, setTitleValue] = useState(null);
  const [regionValue, setRegionValue] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const submitBtnDisabled = image && titleValue && regionValue ? false : true;

  useEffect(() => {
    (async () => {
      const { status: cameraStatus } =
        await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(cameraStatus === "granted");
      const { status: locationStatus } =
        await Location.requestForegroundPermissionsAsync();
      setHasLocationPermission(locationStatus === "granted");
    })();
  }, []);

  const takePhoto = async () => {
    setIsLoading(true);
    const photo = await camera.takePictureAsync();
    setImage(photo.uri);
    if (locationPermission) {
      const position = await Location.getCurrentPositionAsync();
      const place = await Location.reverseGeocodeAsync({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      });
      setRegionValue(`${place[0].region}, ${place[0].country}`);
    }
    setIsLoading(false);
  };

  const onSubmit = async () => {
    setIsLoading(true);
    if (locationPermission) {
      const position = await Location.getCurrentPositionAsync();
      navigation.navigate("InitialPostsScreen", {
        image,
        titleValue,
        regionValue,
        coords: {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        },
      });
    } else {
      navigation.navigate("InitialPostsScreen", {
        image,
        titleValue,
        regionValue,
      });
    }
    setIsLoading(false);
    onDelete();
  };

  const onDelete = () => {
    setImage(null);
    setTitleValue(null);
    setRegionValue(null);
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.containter}>
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : ""}>
          <View style={styles.contentContainer}>
            <View style={styles.imageContainer}>
              {cameraPermission && (
                <Camera
                  style={{ ...styles.image, width: width - 32 }}
                  ref={setCamera}
                >
                  {image && (
                    <Image style={styles.image} source={{ uri: image }} />
                  )}
                  <TouchableOpacity
                    onPress={takePhoto}
                    style={styles.iconContainer}
                    disabled={isLoading}
                  >
                    <Entypo name="camera" size={24} color="#BDBDBD" />
                  </TouchableOpacity>
                </Camera>
              )}
            </View>
            <Text style={styles.imageText}>
              {image ? "Редактировать" : "Загрузите фото"}
            </Text>
            <View style={styles.form}>
              <View style={styles.inputContainer}>
                <TextInput
                  placeholder="Название..."
                  style={styles.input}
                  onChangeText={(value) => setTitleValue(value)}
                  value={titleValue}
                />
              </View>
              <View
                style={{
                  ...styles.inputContainer,
                  position: "relative",
                  marginTop: 16,
                  marginBottom: 32,
                }}
              >
                <TextInput
                  placeholder="Местность..."
                  style={{ ...styles.input, paddingLeft: 28 }}
                  value={regionValue}
                  onChangeText={(value) => {
                    if (!locationPermission) {
                      setRegionValue(value);
                    }
                  }}
                />
                <Feather
                  name="map-pin"
                  size={24}
                  color="#BDBDBD"
                  style={styles.inputIcon}
                />
              </View>
            </View>
          </View>
        </KeyboardAvoidingView>
        <View style={styles.btnContainer}>
          <TouchableOpacity
            onPress={onSubmit}
            activeOpacity={0.8}
            disabled={submitBtnDisabled}
          >
            <View
              style={{
                ...styles.btn,
                backgroundColor: !submitBtnDisabled ? "#FF6C00" : "#F6F6F6",
              }}
            >
              <Text
                style={{
                  ...styles.btnText,
                  color: !submitBtnDisabled ? "#fff" : "#BDBDBD",
                }}
              >
                Опубликовать
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.deleteBtnContainer}>
          <TouchableOpacity
            onPress={onDelete}
            style={styles.deleteBtn}
            disabled={isLoading}
          >
            <Feather name="trash-2" size={24} color="#BDBDBD" />
          </TouchableOpacity>
        </View>
        {isLoading && <ActivityIndicator size="large" style={styles.loader} />}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  containter: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
    position: "relative",
  },
  loader: { position: "absolute", top: "40%" },
  contentContainer: { marginHorizontal: 16 },
  imageContainer: { position: "relative", marginTop: 32 },
  image: {
    height: 240,
    backgroundColor: "#F6F6F6",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    overflow: "hidden",
  },
  iconContainer: {
    position: "absolute",
    top: "36%",
    left: "42%",
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 50,
  },
  imageText: {
    marginTop: 8,
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
    color: "#BDBDBD",
  },
  form: { marginTop: 32 },
  inputContainer: { width: "100%" },
  input: {
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#E8E8E8",
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,

    color: "#212121",
  },
  inputIcon: { position: "absolute", top: "25%", left: 0 },
  btnContainer: { width: "100%" },
  btn: {
    paddingTop: 16,
    paddingBottom: 16,
    borderRadius: 100,
    marginHorizontal: 16,
  },
  btnText: {
    textAlign: "center",
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,

    color: "#BDBDBD",
  },
  deleteBtnContainer: { position: "absolute", bottom: 30 },
  deleteBtn: {
    width: 70,
    height: 40,
    backgroundColor: "#F6F6F6",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  deleteBtnIcon: {},
});
