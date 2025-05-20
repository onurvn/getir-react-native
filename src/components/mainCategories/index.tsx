import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import CategoryItem from "../categoryItem";
import Categories from "../../../assets/data/categories";
import { Category } from "../../models";

const index = () => {
  const [categories, setCategories] = useState(Categories);

  return (
    <View>
      <View style={styles.listContainer}>
        {categories.map((item) => (
          <CategoryItem key={item.id} item={item} />
        ))}
      </View>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-start",
    flexWrap: "wrap",
    width: "100%",
  },
});
