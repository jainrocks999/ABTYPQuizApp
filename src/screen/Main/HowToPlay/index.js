import React from 'react';
import { View,Text,Image,TouchableOpacity } from 'react-native';
import BottomTab from '../../../component/StoreButtomTab';
import styles from './styles';
import StatusBar from '../../../component/StatusBar';
import { useNavigation } from '@react-navigation/native';
const HowTo=()=>{
  const navigation=useNavigation()
    return(
         <View style={styles.container}>
            <View style={styles.main}>
            <TouchableOpacity onPress={()=>navigation.toggleDrawer()}>
            <Image style={styles.image} source={require('../../../assets/Images/drawer1.png')}/>
            </TouchableOpacity>
            <Text style={styles.text}>ABTYP </Text>
            <View></View>
           </View>
         <View style={styles.second}>
         <View style={styles.main1}>
           <Text>Under working</Text>
           </View>
         </View>
         <StatusBar/>
         <BottomTab/>
       </View>
    )
}
export default HowTo;