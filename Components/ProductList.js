import React from "react"
import { View } from "react-native"
import { useSelector } from "react-redux"
import ProductItem from "./ProductItem"

const ProductList = () => {
    const products = useSelector((state) => state.productReducer.products)
    const loading = useSelector((state) => state.productReducer.loading)
    const list = products.map((product) => <ProductItem product={product} key={product.id} />)
    if (!loading) return <View>{list}</View>
    else return <Spinner color="red" loading={true} size={150} />
}
export default ProductList;