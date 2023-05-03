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
import { Entypo, Feather } from "@expo/vector-icons";

export default CreatePostsScreen = () => {
  const { width } = useWindowDimensions();

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.containter}>
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : ""}>
          <View style={styles.contentContainer}>
            <View style={styles.imageContainer}>
              <Image style={{ ...styles.image, width: width - 32 }} />
              <TouchableOpacity
                onPress={() => console.log("btn")}
                style={styles.iconContainer}
              >
                <Entypo name="camera" size={24} color="#BDBDBD" />
              </TouchableOpacity>
            </View>
            <Text style={styles.imageText}>Загрузите фото</Text>
            <View style={styles.form}>
              <View style={styles.inputContainer}>
                <TextInput placeholder="Название..." style={styles.input} />
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
            // disabled={
            //   inputValue.email !== "" && inputValue.password !== ""
            //     ? false
            //     : true
            // }
          >
            <View style={styles.btn}>
              <Text style={styles.btnText}>Опубликовать</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.deleteBtnContainer}>
          <TouchableOpacity
            onPress={() => console.log("btn")}
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
    color: "#BDBDBD",
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
  deleteBtnContainer: { position: "absolute", bottom: 5 },
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
