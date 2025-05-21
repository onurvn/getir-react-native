import React, { useState } from "react";
import { Text, ScrollView } from "react-native";
import CategoryFilter from "../../components/categoryFilter";
import { Category } from "../../models";

function index(props) {
  const [category, setCategory] = useState<Category>(
    props.route.params.category
  );
  return (
    <ScrollView>
      <CategoryFilter category={category} />
    </ScrollView>
  );
}

export default index;
