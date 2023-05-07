import { View, StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";

export default MapScreen = ({ route: { params } }) => {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        mapType="standard"
        minZoomLevel={10}
        region={{
          latitude: params.coords.latitude,
          longitude: params.coords.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker
          title={params.title}
          coordinate={{
            latitude: params.coords.latitude,
            longitude: params.coords.longitude,
          }}
        />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
  map: { width: "100%", height: "100%" },
});
