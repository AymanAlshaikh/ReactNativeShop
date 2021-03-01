import { Spinner } from "native-base"
import React from "react"
import { Image, Text, View } from "react-native"
import { useSelector } from "react-redux"
import ProductList from "./ProductList"


const ShopDetail = () => {
    const loading = useSelector((state) => state.shopReducer.loading)
    const shops = useSelector((state) => state.shopReducer.shop)
    console.log(shops)


    if (!loading)
        return (
            <>
                <Text>
                    {shops[0].name}
                </Text>
                <Image
                    source={{ uri: shops[0].image ?? "https://docs.expo.io/static/images/android-studio-build-tools.png" }}
                    style={{ width: 400, height: 400 }}
                />
                <ProductList />
            </>

        )
    else return <Spinner color="red" loading={true} size={150} />

}
export default ShopDetail;