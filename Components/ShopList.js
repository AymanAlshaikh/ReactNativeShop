import React from "react"
import { View } from "react-native"
import { useSelector } from "react-redux"
import ShopItem from "./ShopItem"

const ShopList = () => {
    const shops = useSelector((state) => state.shopReducer.shop)
    console.log(shops)
    const list = shops.map((shop) => <ShopItem shop={shop} key={shop.id} />)
    return <View>{list}</View>
}
export default ShopList;