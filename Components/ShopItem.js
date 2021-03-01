import React from "react"
import { Text, View } from "react-native"
import shopReducer from "../store/reducers/shopReducer"

const ShopItem = ({ shop }) => {
    return <View><Text>{shop.name}</Text></View>
}
export default ShopItem;