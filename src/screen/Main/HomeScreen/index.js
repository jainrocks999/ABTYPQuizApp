import React,{useEffect} from 'react';
import { View,Text,Image, TouchableOpacity } from 'react-native';
import BottomTab from '../../../component/StoreButtomTab';
import styles from './styles';
import StatusBar from '../../../component/StatusBar';
import { useNavigation } from '@react-navigation/native';
import Header from '../../../component/header';
import Lang from '../../../component/language';
import { useDispatch } from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
import Storage from '../../../component/AsyncStorage';
const Home=()=>{
  const navigation=useNavigation()
  const dispatch=useDispatch()
  useEffect(async()=>{
    const user_id=await AsyncStorage.getItem(Storage.userid)
    console.log('user id',user_id);
    dispatch({
        type: 'Category_List_Request',
        url: 'getquiz',
      })
      dispatch({
        type: 'Leader_Board_Request',
        user_id,
        url: 'leaderboard',

      })
      
    
},[])
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