import { Button, Spinner } from "native-base";
import React from "react";
import { Image, Text, View } from "react-native";
import { useSelector } from "react-redux";
import ProductList from "./ProductList";

const ShopDetail = ({ route, navigation }) => {
  const { shop } = route.params;
  const allProducts = useSelector((state) => state.productReducer.products);
  const shopLoading = useSelector((state) => state.shopReducer.loading);
  const productLoading = useSelector((state) => state.productReducer.loading);
  //const shops = useSelector((state) => state.shopReducer.shop);

  if (shopLoading || productLoading)
    return <Spinner color="red" loading={true} size={150} />;

  const shopProducts = shop.products.map((product) =>
    allProducts.find((_product) => _product.id === product.id)
  );

  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>{shop.name}</Text>
      <Image
        source={{
          uri:
            shop.image ??
            "https://docs.expo.io/static/images/android-studio-build-tools.png",
        }}
        style={{ width: 100, height: 100 }}
      />

      <ProductList products={shopProducts} navigation={navigation} />
    </View>
  );
  //   else return <Spinner color="red" loading={true} size={150} />;
};
export default ShopDetail;
