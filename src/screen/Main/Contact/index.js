import React from 'react';
import { View,Text,Image ,TouchableOpacity} from 'react-native';
import BottomTab from '../../../component/StoreButtomTab';
import styles from './style';
import { useNavigation } from '@react-navigation/native';
import StatusBar from '../../../component/StatusBar';

const Contact=()=>{
  const navigation=useNavigation()
    return(
         <View style={styles.container}>
           <View style={styles.main}>
          
            <TouchableOpacity onPress={()=>navigation.toggleDrawer()}>
            <Image style={styles.image} source={require('../../../assets/Images/drawer1.png')}/>
            </TouchableOpacity>
            <Text style={styles.contact}>Contact us </Text>
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
export default Contact;