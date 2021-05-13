import React from 'react';
import { View,Text,Image ,TouchableOpacity} from 'react-native';
import BottomTab from '../../../component/StoreButtomTab';
import styles from './style';
import { useNavigation } from '@react-navigation/native';
import StatusBar from '../../../component/StatusBar';
import Header from '../../../component/header';
const Contact=()=>{
  const navigation=useNavigation()
    return(
         <View style={styles.container}>
          <Header
          title='Contact us'
          />
          <View style={styles.second}>
          <View style={styles.card}>
              <View style={styles.view}>
              <Text style={{fontFamily:'Poppins-SemiBold'}}>
                Company Name :
              </Text>
              <Text style={styles.text}>Forebear Production</Text>
              </View>
              <View style={styles.view}>
              <Text style={{fontFamily:'Poppins-SemiBold'}}>
                Address :
              </Text>
              <Text style={styles.text}>Chhawni Indore </Text>
              </View>
              <View style={styles.view}>
              <Text style={{fontFamily:'Poppins-SemiBold'}}>
                Email :
              </Text>
              <Text style={styles.text}>forebearpro@gmail.com</Text>
              </View>
              <View style={styles.view}>
              <Text style={{fontFamily:'Poppins-SemiBold'}}>
                Mobile Number :
              </Text>
              <Text style={styles.text}>9876543210</Text>
              </View>
              <View style={styles.view}>
              <Text style={{fontFamily:'Poppins-SemiBold'}}>
                Pincode :
              </Text>
              <Text style={styles.text}>452020</Text>
              </View>
              <View style={styles.view}>
              <Text style={{fontFamily:'Poppins-SemiBold'}}>
                Landline :
              </Text>
              <Text style={styles.text}>0732-1234567</Text>
              </View>
              <View style={styles.view}>
              <Text style={{fontFamily:'Poppins-SemiBold'}}>
                State :
              </Text>
              <Text style={styles.text}>Madhya Pradesh</Text>
              </View>
              <View style={styles.view}>
              <Text style={{fontFamily:'Poppins-SemiBold'}}>
                Country :
              </Text>
              <Text style={styles.text}>India</Text>
              </View>
            </View>
          
         </View>
         <StatusBar/>
         <BottomTab/>
       </View>
    )
}
export default Contact;