import React from 'react';
import { View,Text,Image,TouchableOpacity } from 'react-native';
import BottomTab from '../../../component/StoreButtomTab';
import styles from './styles';
import StatusBar from '../../../component/StatusBar';
import { useNavigation } from '@react-navigation/native';
import Header from '../../../component/header';
const HowTo=()=>{
  const navigation=useNavigation()
    return(
         <View style={styles.container}>
           <Header
           title='HowToPlay'
           />
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