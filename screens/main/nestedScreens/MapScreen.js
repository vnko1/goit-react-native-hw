import { View, StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";

export default MapScreen = ({ route }) => {
  console.log(route);
  return (
    <View style={styles.container}>
      <MapView></MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
});
