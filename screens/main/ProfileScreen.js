import {
  View,
  Text,
  ImageBackground,
  Pressable,
  StyleSheet,
  Image,
  FlatList,
} from "react-native";
import SvgComponent from "../../components/SvgComponent";
import { useAuth } from "../../hooks/useAuth";
import { usePosts } from "../../hooks/usePosts";
import UserPosts from "../../components/UserPosts";
import LogOutButton from "../../components/LogOutButton";
import { useMemo } from "react";

export default ProfileScreen = () => {
  const { displayName, photoURL, uid } = useAuth();
  const { posts } = usePosts();
  const userPosts = useMemo(
    () => posts.filter((post) => post.uid === uid),
    [posts]
  );

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.imageBg}
        source={require("../../assets/images/bg.jpg")}
      >
        <View style={styles.contentContainer}>
          <View style={styles.imageContainer}>
            {photoURL && (
              <Image style={styles.image} source={{ uri: photoURL }} />
            )}
            <Pressable
              style={{
                ...styles.imageIcon,
                borderColor: "#FF6C00",
              }}
            >
              <SvgComponent />
            </Pressable>
          </View>
          <View style={{ position: "absolute", right: 16, top: 22 }}>
            <LogOutButton />
          </View>
          <Text style={styles.text}>{displayName}</Text>
          {userPosts && (
            <FlatList
              style={{ width: "100%", marginHorizontal: 16 }}
              data={userPosts}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => {
                return (
                  <UserPosts
                    image={item.imageUrl}
                    title={item.titleValue}
                    region={item.regionValue}
                    coords={item.coords}
                    id={item.id}
                  />
                );
              }}
            />
          )}
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  imageBg: { flex: 1, justifyContent: "flex-end", resizeMode: "cover" },
  contentContainer: {
    flex: 0.8,
    // width: "100%",
    // marginHorizontal: 16,
    justifyContent: "center",
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
  text: {
    marginTop: 92,
    marginBottom: 32,

    fontFamily: "Roboto-Medium",
    fontSize: 30,
  },
});
