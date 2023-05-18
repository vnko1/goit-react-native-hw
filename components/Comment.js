import { Image, StyleSheet, Text, View } from "react-native";

const Comment = ({ comment, avatar, formatedData, isUserComment }) => {
  if (isUserComment) {
    return (
      <View style={stylesUser.container}>
        <View style={stylesUser.textContainer}>
          <Text style={stylesUser.topText}>{comment}</Text>
          <Text style={stylesUser.bottomText}>
            {formatedData.day} {formatedData.year} | {formatedData.hours}:
            {formatedData.minutes}
          </Text>
        </View>
        <View style={stylesUser.imageContainer}>
          {avatar && (
            <Image
              width={28}
              height={28}
              source={{ uri: avatar }}
              style={stylesUser.image}
            />
          )}
        </View>
      </View>
    );
  } else {
    return (
      <View style={stylesGuest.container}>
        <View style={stylesGuest.imageContainer}>
          {avatar && (
            <Image
              width={28}
              height={28}
              source={{ uri: avatar }}
              style={stylesGuest.image}
            />
          )}
        </View>
        <View style={stylesGuest.textContainer}>
          <Text style={stylesGuest.topText}>{comment}</Text>
          <Text style={stylesGuest.bottomText}>
            {formatedData.day} {formatedData.year} | {formatedData.hours}:
            {formatedData.minutes}
          </Text>
        </View>
      </View>
    );
  }
};

const stylesUser = StyleSheet.create({
  container: {
    marginTop: 32,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textContainer: {
    width: "90%",
    backgroundColor: "#F6F6F6",
    borderBottomLeftRadius: 6,
    borderTopLeftRadius: 6,
    borderBottomRightRadius: 6,
    padding: 16,
  },
  topText: { color: "#212121", marginBottom: 8 },
  bottomText: { color: "#bdbdbd" },
  imageContainer: {
    width: 28,
    height: 28,
    borderRadius: 50,
  },
  image: { borderRadius: 50 },
});

const stylesGuest = StyleSheet.create({
  container: {
    marginTop: 32,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textContainer: {
    width: "90%",
    backgroundColor: "#F6F6F6",
    borderBottomLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomRightRadius: 6,
    padding: 16,
  },
  topText: { color: "#212121", marginBottom: 8 },
  bottomText: { color: "#bdbdbd", marginLeft: "auto" },
  imageContainer: {
    width: 28,
    height: 28,
    borderRadius: 50,
  },
  image: { borderRadius: 50 },
});

export default Comment;
