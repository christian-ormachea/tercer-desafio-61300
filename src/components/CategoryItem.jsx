import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Card from '../components/Card'
import {colors} from '../global/colors'

const CategoryItem = ({category, style, setCategorySelected}) => {
  return (
    <>
        <Card style={{...style}}>
        <Pressable onPress={() => setCategorySelected(category)}>
          <Text style={styles.text}> {category} </Text> 
        </Pressable>
          
        </Card>
    </>
        
    
  )
}

export default CategoryItem

const styles = StyleSheet.create({
    text:{
        fontSize: 25,
    },
})