import { useState } from "react";
import { useDispatch } from "react-redux";
import { logInUser } from "../../redux/index";
import {
  ImageBackground,
  Text,
  KeyboardAvoidingView,
  TextInput,
  TouchableWithoutFeedback,
  View,
  StyleSheet,
  Platform,
  Pressable,
  Keyboard,
  TouchableOpacity,
  Image,
} from "react-native";
import SvgComponent from "../../components/SvgComponent";

const initialValue = { email: "", password: "" };

export default LoginScreen = ({ navigation }) => {
  const [inputValue, setInputValue] = useState(initialValue);
  const [hiddenPassword, setHiddenPassword] = useState(true);
  const [keyBoardIsShown, setKeyBoardIsShown] = useState(false);
  const [focus, setFocus] = useState({
    login: false,
    email: false,
    password: false,
  });
  const dispatch = useDispatch();

  const onPressBtn = () => {
    const { email, password } = inputValue;
    dispatch(logInUser({ email, password }));
    hideKeyboard();
    setInputValue(initialValue);
  };

  const hideKeyboard = () => {
    setKeyBoardIsShown(false);
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={hideKeyboard}>
      <View style={styles.container}>
        <ImageBackground
          style={styles.imageBg}
          source={require("../../assets/images/bg.jpg")}
        >
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : ""}
            style={styles.form}
          >
            <View style={styles.imageContainer}>
              <Image style={styles.image} />
              <Pressable
                style={{
                  ...styles.imageIcon,
                  borderColor: "#FF6C00",
                }}
              >
                <SvgComponent />
              </Pressable>
            </View>
            <Text style={styles.title}>Войти</Text>
            <View style={{ ...styles.inputContainer, marginBottom: 16 }}>
              <TextInput
                style={{
                  ...styles.input,
                  backgroundColor: focus.email ? "#fff" : "#F6F6F6",
                  borderColor: focus.email ? "#FF6C00" : "#E8E8E8",
                }}
                placeholder={"Адрес электронной почты"}
                onBlur={() => {
                  setFocus((state) => ({ ...state, email: false }));
                  setKeyBoardIsShown(false);
                }}
                onFocus={() => {
                  setFocus((state) => ({ ...state, email: true }));
                  setKeyBoardIsShown(true);
                }}
                onChangeText={(value) =>
                  setInputValue((prevState) => ({ ...prevState, email: value }))
                }
                value={inputValue.email}
              ></TextInput>
            </View>
            <View
              style={{
                ...styles.inputContainer,
                position: "relative",
                marginBottom: keyBoardIsShown && 32,
              }}
            >
              <TextInput
                style={{
                  ...styles.input,
                  backgroundColor: focus.password ? "#fff" : "#F6F6F6",
                  borderColor: focus.password ? "#FF6C00" : "#E8E8E8",
                }}
                secureTextEntry={hiddenPassword}
                placeholder={"Пароль"}
                onBlur={() => {
                  setFocus((state) => ({ ...state, password: false }));
                  setKeyBoardIsShown(false);
                }}
                onFocus={() => {
                  setFocus((state) => ({ ...state, password: true }));
                  setKeyBoardIsShown(true);
                }}
                onChangeText={(value) =>
                  setInputValue((prevState) => ({
                    ...prevState,
                    password: value,
                  }))
                }
                value={inputValue.password}
              ></TextInput>
              <Pressable
                style={{
                  ...styles.passwordBtn,
                  top: Platform.OS === "ios" ? 16 : 22,
                }}
                onPress={() => setHiddenPassword((prevState) => !prevState)}
                disabled={inputValue.password !== "" ? false : true}
              >
                <Text style={styles.passwordBtnText}>
                  {hiddenPassword ? "Показать" : "Скрыть"}
                </Text>
              </Pressable>
            </View>
          </KeyboardAvoidingView>
          <View style={styles.btnContainer}>
            <View style={{ marginBottom: 16, marginTop: 40 }}>
              <TouchableOpacity
                onPress={onPressBtn}
                activeOpacity={0.8}
                disabled={
                  inputValue.email !== "" && inputValue.password !== ""
                    ? false
                    : true
                }
              >
                <View style={styles.regBtn}>
                  <Text style={styles.btnText}>Войти</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View
              style={{
                ...styles.btnContainer,
                alignItems: "center",
                marginBottom: 45,
              }}
            >
              <Pressable
                style={styles.link}
                onPress={() => navigation.navigate("Registration")}
              >
                <Text style={styles.linkText}>
                  Нет аккаунта? Зарегистрироваться
                </Text>
              </Pressable>
            </View>
          </View>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  imageBg: { flex: 1, justifyContent: "flex-end", resizeMode: "cover" },
  form: {
    // flex: 0.5,
    alignItems: "center",
    backgroundColor: "#fff",
    position: "relative",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  imageContainer: {
    position: "absolute",
    left: "50%",
    top: -60,
    transform: [{ translateX: -60 }],
  },
  image: {
    borderRadius: 16,
    width: 120,
    height: 120,
    backgroundColor: "#F6F6F6",
  },

  imageIcon: {
    position: "absolute",
    bottom: 0,
    right: -12,
    borderWidth: 1,
    borderColor: "#FF6C00",
    borderRadius: 50,
    width: 25,
    height: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    marginTop: 92,
    marginBottom: 32,
    fontFamily: "Roboto-Medium",
    fontWeight: 500,
    fontSize: 30,
    lineHeight: 35,
    letterSpacing: 0.01,
    color: "#212121",
  },
  inputContainer: {
    width: "100%",
  },
  input: {
    marginHorizontal: 16,
    borderColor: "#E8E8E8",
    borderWidth: 1,
    borderRadius: 8,
    padding: 16,
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
    color: "#212121",
  },

  passwordBtn: {
    position: "absolute",
    top: "50%",
    right: 32,
  },
  passwordBtnText: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
    color: "#1B4371",
  },
  btnContainer: { width: "100%", backgroundColor: "#fff" },
  regBtn: {
    backgroundColor: "#FF6C00",
    marginHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 16,
    borderRadius: 100,
  },
  btnText: {
    textAlign: "center",
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
    color: "#fff",
  },
  linkText: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
    color: "#1B4371",
  },
});
