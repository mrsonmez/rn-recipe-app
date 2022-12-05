import {
  View,
  Text,
  Image,
  StyleSheet,
  Pressable,
  Linking,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export default function DetailCard({ name, img, area, detail, youtube }) {
  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.image} source={{ uri: img }} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.area}>{area}</Text>
      </View>
      <View style={styles.detailContainer}>
        <Text>{detail}</Text>
      </View>
      <Pressable
        style={styles.youtubeContainer}
        onPress={() => Linking.openURL(youtube)}
      >
        <View style={styles.youtubeContainer}>
          <Text style={styles.youtubeTitle}>Watch On Youtube</Text>
        </View>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    marginTop: -25,
    width: "100%",
    height: 200,
    resizeMode: "cover",
  },
  textContainer: {
    padding: 5,
    borderBottomColor: "#bdbdbd",
    borderBottomWidth: 2,
  },
  detailContainer: {
    margin: 3,
  },
  title: {
    color: "#a42a2a",
    fontSize: 28,
    fontWeight: "bold",
  },
  area: {
    color: "#a42a2a",
    fontWeight: "bold",
  },
  youtubeContainer: {
    backgroundColor: "#ff0000",
    width: "95%",
    height: 30,
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 7,
  },
  youtubeTitle: {
    color: "white",
    textAlign: "center",
  },
});
