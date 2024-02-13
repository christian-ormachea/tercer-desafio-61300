import {StyleSheet, View, Text} from 'react-native'
import {colors} from "../global/colors"

function Header({title}){
    return (
    <View style={styles.container}>
        <Text style={styles.titulo}> {title} </Text>
    </View>
    );
}

export default Header;

const styles = StyleSheet.create ({
    container:{
        backgroundColor: colors.verdeOscuro,
        width: "%100",
    },
    titulo:{
        fontSize: 30,
        fontFamily: 'Bold',
        color: colors.blanco,
        textAlign: 'center',
    }
});