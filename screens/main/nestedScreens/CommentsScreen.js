import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  Image,
  TouchableOpacity,
  TextInput,
  FlatList,
} from "react-native";
import { useEffect, useMemo, useState } from "react";
import { usePosts } from "../../../hooks/usePosts";
import { AntDesign } from "@expo/vector-icons";
import { addComment } from "../../../firebase";
import { useDispatch } from "react-redux";
import { getAllPostComments } from "../../../redux/comments";
import { getDate } from "../../../services/functions";
import Comment from "../../../components/Comment";
import { useComments } from "../../../hooks/useComments";
import { useAuth } from "../../../hooks/useAuth";

export default CommentsScreen = ({ route: { params } }) => {
  const [keyboardIsShown, setKeyboardIsShown] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const { posts } = usePosts();
  const { photoURL } = useAuth();
  const { comments } = useComments();
  const dispatch = useDispatch();
  const post = useMemo(() => posts.find((post) => post.id === params.id));

  useEffect(() => {
    dispatch(getAllPostComments(post.id));
  }, []);

  const hideKeyboard = () => {
    Keyboard.dismiss();
    setKeyboardIsShown(false);
  };

  const sendComment = () => {
    const commentDate = new Date();
    const date = commentDate.getTime();
    const dateData = getDate(commentDate);
    const data = {
      comment: inputValue,
      name: post.displayName,
      avatar: photoURL,
      uid: post.uid,
      id: post.id,
      creadetAt: date,
      formatedData: dateData,
    };

    addComment(data, post.id);
    setInputValue("");
  };

  return (
    <TouchableWithoutFeedback onPress={hideKeyboard}>
      <View style={{ backgroundColor: "#fff", flex: 1 }}>
        <View style={styles.container}>
          <View>
            <Image
              source={{ uri: post.imageUrl }}
              style={styles.image}
              height={240}
            />
          </View>
          <FlatList
            data={comments}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => {
              return (
                <Comment
                  comment={item.comment}
                  avatar={item.avatar}
                  formatedData={item.formatedData}
                  userId={item.uid}
                />
              );
            }}
          />
          <View>
            <KeyboardAvoidingView
              behavior={Platform.OS === "ios" ? "padding" : "height"}
            >
              <View
                style={{
                  ...styles.inputContainer,
                  marginBottom: keyboardIsShown ? 100 : 32,
                }}
              >
                <TextInput
                  style={styles.input}
                  value={inputValue}
                  placeholder="Комментировать..."
                  onFocus={() => setKeyboardIsShown(true)}
                  onBlur={() => setKeyboardIsShown(false)}
                  onChangeText={(value) => setInputValue(value)}
                />
                <TouchableOpacity
                  style={styles.btn}
                  onPress={sendComment}
                  disabled={!inputValue}
                >
                  <AntDesign name="arrowup" size={20} color="white" />
                </TouchableOpacity>
              </View>
            </KeyboardAvoidingView>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    backgroundColor: "#fff",
    marginHorizontal: 16,
    flex: 1,
  },
  image: { width: "100%", height: 200, borderRadius: 8, marginTop: 32 },
  inputContainer: { width: "100%", position: "relative" },
  input: {
    width: "100%",
    backgroundColor: "#F6F6F6",
    height: 50,
    paddingLeft: 16,

    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 100,
    fontSize: 16,
  },
  btn: {
    position: "absolute",
    top: 8,
    right: 8,
    width: 34,
    height: 34,
    backgroundColor: "#FF6C00",
    borderRadius: "50%",
    alignItems: "center",
    justifyContent: "center",
  },
});
