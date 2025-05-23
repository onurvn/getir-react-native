import React, { useEffect, useState } from "react";
import { ActivityIndicator, ScrollView, Text, View } from "react-native";
import { Product } from "../../models";
import ImageCarousel from "../../components/imageCarousel";
import DetailBox from "../../components/detailBox";
import ProductDetail from "../../components/productDetail";
import Button from "../../components/button";

function index(props) {
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    setProduct(props.route.params.product);
  }, []);

  if (!product) {
    return <ActivityIndicator color={"#5D3EBD"} />;
  }

  return (
      <ScrollView>
        <ImageCarousel images={product.images || []} />
        <DetailBox
          price={product.price}
          name={product.name}
          amount={product.amount}
        />
        <Text
          style={{
            paddingHorizontal: 10,
            paddingVertical: 13,
            color: "#808B99",
            fontWeight: "600",
            fontSize: 14,
          }}
        >
          Detaylar
        </Text>
        <ProductDetail />
        <Button />
      </ScrollView>
  );
}

export default index;
