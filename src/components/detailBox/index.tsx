import React from "react";
import { View, Text } from "react-native";

type DetailBoxProps = {
  price: number;
  name: string;
  amount: string;
};

function index({ price, name, amount }: DetailBoxProps) {
  return (
    <View
      style={{ width: "100%", alignItems: "center", backgroundColor: "white" }}
    >
      <Text
        style={{
          color: "#5D3EBD",
          fontWeight: "bold",
          fontSize: 20,
          marginTop: 12,
        }}
      >
        <Text>{"\u20BA"}</Text>
        {price}
      </Text>
      <Text style={{ fontWeight: "700", fontSize: 16, marginTop: 12 }}>
        {name}
      </Text>
      <Text
        style={{
          color: "#848897",
          fontWeight: "600",
          marginTop: 8,
          paddingBottom: 18,
        }}
      >
        {amount}
      </Text>
    </View>
  );
}

export default index;
