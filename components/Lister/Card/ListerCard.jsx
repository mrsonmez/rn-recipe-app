import { Text, StyleSheet, ImageBackground, Pressable } from "react-native";
import React from "react";

export default function CategoriesCard({ navigation, meal, img }) {
  const detail = () => {
    navigation.navigate("Detail", meal);
  };

  return (
    <Pressable style={styles.container} onPress={() => detail()}>
      <ImageBackground
        resizeMode="cover"
        style={styles.image}
        source={{ uri: img }}
      >
        <Text style={styles.title}>{meal}</Text>
      </ImageBackground>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: "#ffa500",
  },
  buttonContainer: {
    backgroundColor: "#eceff1",
    flexDirection: "row",
    borderTopLeftRadius: 100,
    borderBottomLeftRadius: 100,
  },
  image: {
    height: 150,
    justifyContent: "flex-end",
  },
  textContainer: {
    padding: 10,
    justifyContent: "center",
  },
  title: {
    backgroundColor: "#000000c0",
    fontSize: 30,
    color: "white",
    textAlign: "right",
  },
});
