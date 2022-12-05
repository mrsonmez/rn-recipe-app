import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import React from "react";

export default function CategoriesCard({ navigation, category, img }) {
  return (
    <Pressable
      style={styles.container}
      onPress={() => navigation.navigate("Meals", category)}
    >
      <View style={styles.buttonContainer}>
        <Image style={styles.image} source={{ uri: img }} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{category}</Text>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    flexDirection: "column",
  },
  buttonContainer: {
    backgroundColor: "#eceff1",
    flexDirection: "row",
    borderTopLeftRadius: 100,
    borderBottomLeftRadius: 100,
  },
  image: {
    width: 80,
    height: 80,
    resizeMode: "contain",
  },
  textContainer: {
    padding: 10,
    justifyContent: "center",
  },
  title: {
    fontSize: 16,
  },
});
