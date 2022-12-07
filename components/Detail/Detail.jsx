import { ActivityIndicator, SafeAreaView, StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { API_URL } from "@env";
import { useEffect, useState } from "react";
import axios from "axios";
import DetailCard from "./Card/DetailCard";
import Lottie from "lottie-react-native";
export default function Detail({ route }) {
  const meal = route.params;
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const req = async () => {
    setLoading(true);
    const res = await axios.get(`${API_URL}search.php?s=${meal}`);
    setLoading(false);
    setData(res.data.meals);
  };
  const rendered = ({ item }) => {
    return (
      <DetailCard
        name={item.strMeal}
        img={item.strMealThumb}
        area={item.strArea}
        detail={item.strInstructions}
        youtube={item.strYoutube}
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
    backgroundColor: "#f2f2f2",
  },
});
