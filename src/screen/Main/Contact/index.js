import React from 'react';
import { View,Text,Image ,TouchableOpacity} from 'react-native';
import BottomTab from '../../../component/StoreButtomTab';
import styles from './style';
import { useNavigation } from '@react-navigation/native';
import StatusBar from '../../../component/StatusBar';
import Header from '../../../component/header';
import Lang from '../../../component/language';
const Contact=()=>{
  const navigation=useNavigation()
    return(
         <View style={styles.container}>
          <Header
          title={Lang.ContactUs}
          />
          <View style={styles.second}>
          <View style={styles.card}>
             
              <View style={styles.view}>
              <Text style={styles.text}>{Lang.contactNode}</Text>
              </View>
              <View style={styles.view}>
              <Text style={styles.text}>{Lang.phone}</Text>
              </View>
              <View style={styles.view}>
             
              <Text style={styles.text}>{Lang.EmailData}</Text>
              </View>
              
            </View>
          
         </View>
         <StatusBar/>
         <BottomTab/>
       </View>
    )
}
export default Contact;