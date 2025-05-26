import React from "react";
import { Image, Text, TouchableOpacity, View, Dimensions } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { Product } from "../../models";
import { useNavigation } from "@react-navigation/native";
import { connect } from "react-redux";
import * as actions from "../../redux/actions/cartActions";

const { height, width } = Dimensions.get("window");

type productItemType = {
  item: Product;
  addItemToCart: (a: Product) => void;
};

function index({ item, addItemToCart }: productItemType) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("ProductDetails", { product: item })}
      style={{
        width: width * 0.285,
        marginTop: 12,
        height: height * 0.25,
        flexDirection: "column",
        alignItems: "flex-start",
        marginLeft: 12,
        marginBottom: 10,
      }}
    >
      <Image
        style={{
          width: width * 0.265,
          height: width * 0.265,
          borderRadius: 12,
          borderWidth: 0.1,
          borderColor: "gray",
        }}
        source={{
          uri: item.image,
        }}
      />
      <View
        style={{ flexDirection: "row", marginTop: 10, alignItems: "center" }}
      >
        <Text
          style={{
            textDecorationLine: "line-through",
            color: "#747990",
            fontWeight: "bold",
            fontSize: 10,
          }}
        >
          <Text>{"\u20BA"}</Text>
          {item.price}
        </Text>
        <Text
          style={{
            color: "#5D3EBD",
            fontWeight: "bold",
            fontSize: 12,
            marginLeft: 4,
          }}
        >
          <Text>{"\u20BA"}</Text>
          {item.cutPrice}
        </Text>
      </View>
      <Text
        style={{
          fontWeight: "600",
          fontSize: 12,
          marginTop: 5,
        }}
      >
        {item.name}
      </Text>
      <Text
        style={{
          color: "#747990",
          fontSize: 12,
          marginTop: 4,
          fontWeight: "600",
        }}
      >
        {item.amount}
      </Text>
      <TouchableOpacity
        onPress={() => {
          addItemToCart(item)
        }}
        style={{
          width: 30,
          height: 30,
          borderWidth: 0.3,
          borderColor: "lightgrey",
          backgroundColor: "white",
          position: "absolute",
          right: -6,
          top: -5,
          borderRadius: 6,
          alignItems: "center",
          justifyContent: "center",
          shadowRadius: 3.8,
          shadowOpacity: 0.05,
        }}
      >
        <Entypo name="plus" size={22} color="#5D3EBD" />
      </TouchableOpacity>
    </TouchableOpacity>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    addItemToCart: (product: Product) =>
      dispatch(actions.addToCart({ quantity: 1, product })),
  };
};
export default connect(null, mapDispatchToProps)(index);
