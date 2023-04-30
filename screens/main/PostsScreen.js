import { Image, StyleSheet, Text, View } from "react-native";
import { user } from "../../services/context";

export default PostsScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.user}>
        <View>
          <Image
            source={require("../../assets/images/User.jpg")}
            style={styles.userImage}
          ></Image>
        </View>
        <View style={styles.userInfo}>
          <Text style={styles.userInfoText}>User name</Text>
          <Text style={styles.userInfoMail}>User e-mail</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#fff",
  },
  titleBox: {
    margin: 0,
    alignItems: "center",
    backgroundColor: "#fff",
    height: 88,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(0,0,0,0.3)",
  },
  header: {
    height: 22,
    fontWeight: "500",
    fontSize: 17,
    color: "#212121",
    marginTop: 55,
    marginBottom: 11,
  },
  user: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 32,
    marginLeft: 16,
    width: 170,
    height: 60,
  },
  userImage: {
    resizeMode: "contain",
    width: 60,
    height: 60,
    borderWidth: 1,
    borderRadius: 16,
  },
  userInfo: {
    marginLeft: 8,
  },
  userInfoText: {
    fontWeight: "700",
    fontSize: 13,
  },
  userInfoMail: {
    fontWeight: "400",
    fontSize: 11,
  },
  footer: {
    borderTopWidth: 1,
    borderTopColor: "rgba(0,0,0,0.3)",
    width: "100%",
    height: 83,
    position: "absolute",
    bottom: 0,
  },
});
