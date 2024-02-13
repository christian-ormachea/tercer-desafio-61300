import { StyleSheet, Text, View, TextInput } from 'react-native'
import {useState}  from "react";
import { AntDesign } from "@expo/vector-icons";
import {colors} from '../global/colors'
import React from 'react'

const Search = ({keyword, onSearch}) => {
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
        <TextInput placeholder='Buscar un producto...' 
        style={styles.input}
        value={keyword}
        onChangeText={onSearch}
        />
      </View>
      <AntDesign name="search1" size={20} color="black"/>
    </View>
  )
}

export default Search

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        padding: 15,
        backgroundColor: colors.verdeClaro,
    },
    input:{
        color: 'white',
        backgroundColor: colors.verdeOscuro,
        borderRadius: 8,
        padding: 10,
        borderWidth: 1,
        borderColor: colors.blanco,
        width: "90%",
        fontSize: 20,
    }
})