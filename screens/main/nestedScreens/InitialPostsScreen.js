import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Image, StyleSheet, Text, View, FlatList } from "react-native";
import { useAuth } from "../../../hooks/useAuth";
import Post from "../../../components/Post";
import { getAllPosts } from "../../../redux/posts";
import { usePosts } from "../../../hooks/usePosts";

export default InitialPostsScreen = () => {
  const { posts } = usePosts();
  const { email, displayName, photoURL } = useAuth();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllPosts());
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
              id={item.id}
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
    fontWeight: 700,
    fontSize: 13,
  },
  userInfoMail: {
    fontWeight: 400,
    fontSize: 11,
  },
});
