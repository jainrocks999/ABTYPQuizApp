import React from 'react';
import { View,Text,Image,TouchableOpacity } from 'react-native';
import BottomTab from '../../../component/StoreButtomTab';
import styles from './style';
import { useNavigation } from '@react-navigation/native';
import StatusBar from '../../../component/StatusBar';
const Book=()=>{
  const navigation=useNavigation()
    return(
         <View style={styles.container}>
           <View style={styles.main}>
            <TouchableOpacity onPress={()=>navigation.toggleDrawer()}>
            <Image style={styles.image} source={require('../../../assets/Images/drawer1.png')}/>
            </TouchableOpacity>
            <Text style={styles.book}>E-Book </Text>
            <View></View>
           </View>
         <View style={styles.second}>
         <View style={{justifyContent:'center',alignItems:'center',flex:1}}>
           <Text>Under working</Text>
           </View>
         </View>
         <StatusBar/>
         <BottomTab/>
       </View>
    )
}
export default Book;