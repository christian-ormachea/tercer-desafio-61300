import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import categories from '../data/categories.json'
import CategoryItem from '../components/CategoryItem'
import { colors } from '../global/colors'

const Categories = ({setCategorySelected}) => {
  return (
    <View style={styles.contenedor}>
      <View style={styles.contenedorTitulo}>
        <Text style={styles.tituloCategoria}> Categorias: </Text>
      </View>
      <FlatList
      data={categories}
      renderItem={({ item }) => <CategoryItem setCategorySelected={setCategorySelected} category={item} style={{padding: 10, borderWidth: 0.5}} />}
      keyExtractor={(category) => category}
      />
    </View>
  )
}

export default Categories

const styles = StyleSheet.create({
  contenedor:{
    flex: 1,
    backgroundColor: colors.verdeGrisaceo,
  },
  tituloCategoria:{
        fontSize: 25,
        color: 'black',
  },
  contenedorTitulo:{
    alignContent: 'center',
    alignItems: 'center',
    borderColor: colors.blanco,
    borderStyle: 'dotted',
    borderWidth: 3,
    padding: 10,
  },
})