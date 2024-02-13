import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Card = ({children, estilosProps}) => {
  return (
    <View style={{...styles.container, ...estilosProps}}>
      {children}
    </View>
  )
}

export default Card

const styles = StyleSheet.create({
    container:{
        shadowColor: "#000",
        shadowOffset:{
        width: 0,
        height: 2,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 4, 
    },
})