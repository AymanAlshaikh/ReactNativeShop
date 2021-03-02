import React from "react";
import { View } from "react-native";
import { useSelector } from "react-redux";
import ProductItem from "./ProductItem";

const ProductList = ({ products, navigation }) => {
  // const products = useSelector((state) => state.productReducer.products)
  // const loading = useSelector((state) => state.productReducer.loading)
  const list = products.map((product) => (
    <ProductItem product={product} key={product.id} navigation={navigation} />
  ));
  //if (!loading)
  return <View>{list}</View>;
  //else return <Spinner color="red" loading={true} size={150} />;
};
export default ProductList;
