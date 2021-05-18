import React from 'react';
import { View,Text,Image, TouchableOpacity } from 'react-native';
import BottomTab from '../../../component/StoreButtomTab';
import styles from './styles';
import StatusBar from '../../../component/StatusBar';
import { useNavigation } from '@react-navigation/native';
import Header from '../../../component/header';
import Lang from '../../../component/language';
const Home=()=>{
  const navigation=useNavigation()
    return(
         <View style={styles.container}>
           <Header
           title={Lang.Home}
           />
         <View style={styles.second}>
          <TouchableOpacity style={styles.card}>
            <Text style={styles.text}>{Lang.AboutApp}</Text>
          </TouchableOpacity>
          <TouchableOpacity
          onPress={()=>navigation.navigate('Book')}
           style={[styles.card,{marginTop:10}]}>
            <Text style={styles.text}>{Lang.Ebook}</Text>
          </TouchableOpacity>
          <TouchableOpacity
          onPress={()=>navigation.navigate('Quiz')}
           style={[styles.card,{marginTop:10}]}>
            <Text style={styles.text}>{Lang.QuizScreen}</Text>
          </TouchableOpacity>
         </View>
         <StatusBar/>
         <BottomTab/>
       </View>
    )
}
export default Home;