import {View, Text} from 'react-native'
import Header from '../components/Header'
import Categories from '../components/Categories'
import Constants from 'expo-constants'

function Home({setCategorySelected}){
    return (
    <View style={{flex: 1, marginTop: Constants.statusBarHeight}}>
        <Header title={'Inicio'}/>
        <Categories setCategorySelected={setCategorySelected}/>
    </View>

);}

export default Home