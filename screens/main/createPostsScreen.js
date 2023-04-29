import { View, StyleSheet, Image } from "react-native";

export default CreatePostsScreen = () => {
  return (
    <View style={styles.container}>
      <View>
        <Image width={343} height={240} style={styles.imageBg} />
      </View>
      <View></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  imageBg: { backgroundColor: "#F6F6F6", marginTop: 120, borderRadius: 8 },
});
