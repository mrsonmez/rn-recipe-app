import { StyleSheet, FlatList, ActivityIndicator } from "react-native";
import { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CategoriesCard from "./Card/CategoriesCard";
import axios from "axios";
import { API_URL } from "@env";
export default function Categories({ navigation }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const req = async () => {
    setLoading(true);
    const res = await axios.get(`${API_URL}categories.php`);
    setLoading(false);
    setData(res.data.categories);
  };
  const rendered = ({ item }) => {
    return (
      <CategoriesCard
        category={item.strCategory}
        img={item.strCategoryThumb}
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
        <ActivityIndicator size={"large"} />
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
