import { StyleSheet, Text, View, FlatList } from 'react-native'
import {useState, useEffect} from "react";
import ProductItem from './ProductItem'
import allProducts from '../data/products.json'
import { colors } from '../global/colors'
import Search from '../components/Search'
import React from 'react'

const Products = ({category}) => {
  const [products, setProducts] = useState([]);
  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    if(category) {
        const products = allProducts.filter((product) => product.category === category);
        const filteredProducts = products.filter((product) => product.title.includes(keyword));
        setProducts(filteredProducts)
    }
  }, [category, keyword])
  return (
    <View style={styles.contenedor}>
        <View style={styles.contenedorTitulo}>
            <Text style={styles.tituloProductos}>Lista de productos: </Text>  
        </View>
        <Search keyword={keyword} onSearch={setKeyword}/>
        <FlatList
        data={products}
        renderItem={({item}) => <ProductItem product={item}/>}
        keyExtractor={(item)=>item.id}
        />
    </View>
  )
}

export default Products

const styles = StyleSheet.create({
    contenedor:{
        flex: 1,
        backgroundColor: colors.verdeGrisaceo,
    },
    contenedorTitulo:{
        alignContent: 'center',
        alignItems: 'center',
        borderColor: colors.blanco,
        borderStyle: 'dotted',
        borderWidth: 3,
        padding: 10,
    },
    tituloProductos:{
        fontSize: 25,
        color: 'black',
    },
})