import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Card from '../components/Card'
import {colors} from '../global/colors'

const ProductItem = ({product, estilosProps}) => {
  return (
    <>
        <Card style={{...estilosProps}}>
            <Text style={styles.texto}> {product.title} </Text>
        </Card>
    </>
  )
}

export default ProductItem;

const styles = StyleSheet.create({
    texto: {
        textAlign: 'center',
        fontSize: 15,
    },
})