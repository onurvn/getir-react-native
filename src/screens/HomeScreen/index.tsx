import React from "react";
import { ScrollView } from "react-native";
import Header from "../../components/header";
import BannerCarousel from "../../components/banner";
import MainCategories from "../../components/mainCategories";

function index() {
  return (
    <ScrollView
      stickyHeaderIndices={[0]}
      style={{ backgroundColor: "#f5f5f5" }}
    >
      <Header />
      <BannerCarousel />
      <MainCategories />
    </ScrollView>
  );
}

export default index;
