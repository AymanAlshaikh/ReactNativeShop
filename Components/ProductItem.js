import React from "react"
import { Text, View } from "react-native"


const ProductItem = ({ product }) => {
    return <View><Text>{product.name}</Text>
        {/* <Image
            source={{ uri: product.image ?? "https://docs.expo.io/static/images/android-studio-build-tools.png" }}
            style={{ width: 400, height: 400 }}
        /> */}
    </View>
}
export default ProductItem;