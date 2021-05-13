import React from 'react';
import { View,Text,TouchableOpacity ,StyleSheet,Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';
const Header=({title})=>{
    const navigation=useNavigation()
    return(
        <View>
            <View style={styles.main}>
            <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
            <Image style={styles.drawer} source={require('../../assets/Images/drawer1.png')}/>
            </TouchableOpacity>
            <Text style={styles.text}>{title} </Text>
            <View></View>
           </View>
        </View>
    )
}
export default Header
const styles=StyleSheet.create({
    main:{
        width:'100%',
        backgroundColor:'red',
        height:45,
        alignItems:'center',
        justifyContent:'space-between',
        paddingHorizontal:10,
        flexDirection:'row'
    },
    drawer:{
        width:30,
        height:30,
        tintColor:'white'
    },
    text:{
        color:'white',
        fontSize:17,
        fontFamily:'Poppins-Bold'
    },
})