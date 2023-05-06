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
} from "react-native";
import { Camera } from "expo-camera";
import * as Location from "expo-location";
import { Entypo, Feather } from "@expo/vector-icons";

export default CreatePostsScreen = () => {
  const { width } = useWindowDimensions();
  const [hasPermission, setHasPermission] = useState(null);
  const [camera, setCamera] = useState(null);
  const [image, setImage] = useState(null);
  const [inputValue, setInputValue] = useState({ title: "", region: "" });

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();

      setHasPermission(status === "granted");
    })();
  }, []);

  const takePhoto = async () => {
    const photo = await camera.takePictureAsync();
    setImage(photo.uri);

    const location = await Location.getCurrentPositionAsync();
    console.log("latitude", location);
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.containter}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : ""}
          style={{ marginTop: 10 }}
        >
          <View style={styles.contentContainer}>
            <View style={styles.imageContainer}>
              {hasPermission && (
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
                  onChangeText={(value) =>
                    setInputValue((state) => ({ ...state, title: value }))
                  }
                  value={inputValue.title}
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
                  onChangeText={(value) =>
                    setInputValue((state) => ({ ...state, region: value }))
                  }
                  value={inputValue.region}
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
            onPress={() => console.log("btn")}
            activeOpacity={0.8}
            disabled={image ? false : true}
          >
            <View style={styles.btn}>
              <Text style={styles.btnText}>Опубликовать</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.deleteBtnContainer}>
          <TouchableOpacity
            onPress={() => setImage(null)}
            style={styles.deleteBtn}
          >
            <Feather name="trash-2" size={24} color="#BDBDBD" />
          </TouchableOpacity>
        </View>
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
    // color: "#BDBDBD",
    color: "#212121",
  },
  inputIcon: { position: "absolute", top: "25%", left: 0 },
  btnContainer: { width: "100%" },
  btn: {
    // backgroundColor: "#FF6C00",
    backgroundColor: "#F6F6F6",
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
    // color: "#fff",
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
