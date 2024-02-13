import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import Constants from 'expo-constants'
import Header from '../components/Header'
import products from '../data/products.json'
import Products from '../components/Products'

const ItemListCategories = () => {
  return (
    <View style={styles.contenedor}>
      <Header title={'Inicio'}/> 
      <Products/>
    </View>
  )
}

export default ItemListCategories

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
})