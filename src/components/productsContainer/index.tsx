import React from "react";
import { Text, View } from "react-native";
import ProductItem from "../productItem";
import Products from "../../../assets/data/products";

function index() {
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "white",
        }}
      >
        {Products.slice(0, 2).map((item) => (
          <ProductItem key={item.id} item={item} />
        ))}
      </View>

      <Text style={{ color: "gray", fontWeight: "bold", padding: 14 }}>
        Çubuk
      </Text>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          flex: 1,
          flexWrap: "wrap",
          width: "100%",
          backgroundColor: "white",
          paddingVertical: 10,
        }}
      >
        {Products.slice(0.3).map((item) => (
          <ProductItem key={item.id} item={item} />
        ))}
      </View>
    </View>
  );
}

export default index;
