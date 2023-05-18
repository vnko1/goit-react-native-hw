import {
  View,
  Image,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { Feather } from "@expo/vector-icons";
import { getCommentsCount } from "../firebase";

import { useComments } from "../hooks/useComments";

export default Post = ({ image, title, region, coords, id }) => {
  const [value, setValue] = useState(0);
  const navigation = useNavigation();
  const { comments } = useComments();

  useEffect(() => {
    (async () => {
      const value = await getCommentsCount(id);

      setValue(value);
    })();
  }, [comments]);

  return (
    <View style={styles.container}>
      <Image source={{ uri: image }} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <View style={styles.textContainer}>
        <TouchableWithoutFeedback
          onPress={() => {
            navigation.navigate("Comments", { id });
          }}
        >
          <View style={styles.commentsContainer}>
            <Feather
              name="message-circle"
              size={18}
              color={value > 0 ? "#FF6C00" : "#BDBDBD"}
            />
            <Text style={styles.commentText}>{value}</Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback
          onPress={() => {
            navigation.navigate("Map", { coords, title });
          }}
        >
          <View style={styles.locationContainer}>
            <Feather name="map-pin" size={18} color="#BDBDBD" />
            <Text style={styles.locationText}>{region}</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 34,
    justifyContent: "center",
    marginHorizontal: 16,
  },
  image: { width: "100%", height: 200, borderRadius: 8, marginBottom: 8 },
  title: {
    marginBottom: 11,
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
    color: "#212121",
  },
  textContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  commentsContainer: { flexDirection: "row", alignItems: "center", gap: 9 },
  commentText: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
    color: "#BDBDBD",
  },
  locationContainer: { flexDirection: "row", alignItems: "center", gap: 9 },
  locationText: {
    textDecorationLine: "underline",
    color: "#212121",
  },
});
