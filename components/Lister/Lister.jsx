import { ActivityIndicator, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import ListerCard from "./Card/ListerCard";
import { SafeAreaView } from "react-native-safe-area-context";
import { FlatList } from "react-native-gesture-handler";
import { API_URL } from "@env";
import Lottie from "lottie-react-native";
export default function Lister({ navigation, route }) {
  const meal = route.params;
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const req = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`${API_URL}filter.php?c=${meal}`);
      setLoading(false);
      setData(res.data.meals);
    } catch (err) {
      setError(err.message);
    }
  };
  const rendered = ({ item }) => {
    return (
      <ListerCard
        meal={item.strMeal}
        img={item.strMealThumb}
        navigation={navigation}
      />
    );
  };
  useEffect(() => {
    req();
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      {loading ? (
        <Lottie source={require("../../loading.json")} autoPlay loop />
      ) : (
        <FlatList data={data} renderItem={rendered} />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffa500",
  },
});
