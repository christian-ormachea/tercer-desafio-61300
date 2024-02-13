import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/screens/Home'
import ItemListCategories from './src/screens/ItemListCategories';
import { useState } from 'react';
import { useFonts } from 'expo-font';
import { fonts } from './src/global/fonts'

export default function App() {
  //Fuentes
  const [fontsLoaded] = useFonts(fonts);
  //selectorDePantalla
  const [categorySelected, setCategorySelected] = useState('');


  if(!fontsLoaded){
      return null
  }

  return (
    <>
      {categorySelected ? (
        <ItemListCategories />
      ) : (
        <Home setCategorySelected={setCategorySelected}/>
      )}
    </>
    
  );
}


