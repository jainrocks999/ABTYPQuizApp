import React from 'react';
import { View,Text,Image, TouchableOpacity } from 'react-native';
import BottomTab from '../../../component/StoreButtomTab';
import styles from './styles';
import StatusBar from '../../../component/StatusBar';
import { useNavigation } from '@react-navigation/native';
import Header from '../../../component/header';
const Home=()=>{
  const navigation=useNavigation()
    return(
         <View style={styles.container}>
           <Header
           title='Home'
           />
         <View style={styles.second}>
          <TouchableOpacity style={styles.card}>
            <Text style={styles.text}>About App</Text>
          </TouchableOpacity>
          <TouchableOpacity
          onPress={()=>navigation.navigate('Book')}
           style={[styles.card,{marginTop:10}]}>
            <Text style={styles.text}>E-Book</Text>
          </TouchableOpacity>
          <TouchableOpacity
          onPress={()=>navigation.navigate('Quiz')}
           style={[styles.card,{marginTop:10}]}>
            <Text style={styles.text}>Quiz Screen</Text>
          </TouchableOpacity>
         </View>
         <StatusBar/>
         <BottomTab/>
       </View>
    )
}
export default Home;