import React, { useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { Dimensions } from "react-native";
import Categories from "../../../assets/data/categories";
import { Category } from "../../models";

const { height, width } = Dimensions.get("window");

const CategoryBox = ({
  item,
  active,
}: {
  item: Category;
  active: Category;
}) => {
  return (
    <View
      style={[
        {
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          paddingHorizontal: 9,
        },
        item.name == active.name && {
          borderBottomColor: "#ffd00c",
          borderBottomWidth: 2,
        },
      ]}
    >
      <Text style={{ fontSize: 14, color: "white", fontWeight: "600" }}>
        {item.name}
      </Text>
    </View>
  );
};

function index({ category }: { category: Category }) {
  const [categories, setCategories] = useState(Categories);
  return (
    <ScrollView
      style={{
        width: "100%",
        backgroundColor: "#7849F7",
        height: height * 0.065,
      }}
      showsVerticalScrollIndicator={false}
      bounces={true}
      horizontal={true}
    >
      {Categories.map((item) => (
        <CategoryBox key={item.id} active={category} item={item} />
      ))}
    </ScrollView>
  );
}

export default index;
