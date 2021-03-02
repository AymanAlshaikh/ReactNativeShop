import { Spinner } from "native-base";
import React from "react";
import { Image, Text, View } from "react-native";
import { useSelector } from "react-redux";

const ProductDetail = ({ route }) => {
  const { product } = route.params;
  const products = useSelector((state) => state.productReducer.products);
  const productLoading = useSelector((state) => state.productReducer.loading);

  if (productLoading) return <Spinner color="red" loading={true} size={150} />;

  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>{product.name}</Text>
      <Image
        source={{
          uri:
            product.image ??
            "https://docs.expo.io/static/images/android-studio-build-tools.png",
        }}
        style={{ width: 100, height: 100 }}
      />
    </View>
  );
  //   else return <Spinner color="red" loading={true} size={150} />;
};
export default ProductDetail;
