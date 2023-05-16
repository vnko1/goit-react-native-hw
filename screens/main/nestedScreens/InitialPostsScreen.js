import { useEffect, useState } from "react";
import { useAuth } from "../../../hooks/useAuth";
import { Image, StyleSheet, Text, View, Button, FlatList } from "react-native";
import Post from "../../../components/Post";

import { getPosts, getAllPosts } from "../../../firebase";

export default InitialPostsScreen = ({ route }) => {
  const [posts, setPosts] = useState([]);
  const { email, displayName, photoURL } = useAuth();

  useEffect(() => {
    getAllPosts();
    // getPosts(setPosts);
    // if (route.params) {
    //   setPosts((state) => [...state, route.params]);
    // }
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.user}>
        <View>
          <Image
            source={{ uri: photoURL }}
            style={styles.userImage}
            width={60}
            height={60}
          />
        </View>
        <View style={styles.userInfo}>
          <Text style={styles.userInfoText}>{displayName}</Text>
          <Text style={styles.userInfoMail}>{email}</Text>
        </View>
      </View>
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return (
            <Post
              image={item.imageUrl}
              title={item.titleValue}
              region={item.regionValue}
              coords={item.coords}
            />
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  user: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 32,
    marginLeft: 16,
    width: 170,
    height: 60,
    marginBottom: 32,
  },
  userImage: {
    resizeMode: "contain",

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
  // titleBox: {
  //   margin: 0,
  //   alignItems: "center",
  //   backgroundColor: "#fff",
  //   height: 88,
  //   borderBottomWidth: 1,
  //   borderBottomColor: "rgba(0,0,0,0.3)",
  // },
  // header: {
  //   height: 22,
  //   fontWeight: "500",
  //   fontSize: 17,
  //   color: "#212121",
  //   marginTop: 55,
  //   marginBottom: 11,
  // },
  // footer: {
  //   borderTopWidth: 1,
  //   borderTopColor: "rgba(0,0,0,0.3)",
  //   width: "100%",
  //   height: 83,
  //   position: "absolute",
  //   bottom: 0,
  // },
});
