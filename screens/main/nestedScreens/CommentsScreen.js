import { View, Text } from "react-native";
import { usePosts } from "../../../hooks/usePosts";
import { useMemo } from "react";
import { TextInput } from "react-native-gesture-handler";

export default CommentsScreen = ({ route: { params } }) => {
  const { posts } = usePosts();
  const post = useMemo(() => posts.find((post) => post.id === params.id));
  console.log(post);
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <View>
        <TextInput value="CommentsScreen" />
      </View>
    </View>
  );
};
