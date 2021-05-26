import React from 'react';
import { View,Text,TouchableOpacity, FlatList } from 'react-native';
import BottomTab from '../../../component/StoreButtomTab';
import styles from './style';
import StatusBar from '../../../component/StatusBar';
import { useNavigation } from '@react-navigation/native';
import Header from '../../../component/header';
import { useSelector } from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
import Storage from '../../../component/AsyncStorage';
const HowTo=()=>{
  const navigation=useNavigation()
  const selector=useSelector(state=>state.CategoryList)

  const checkIn=async(item)=>{
  const mobile=await AsyncStorage.getItem(Storage.mobile)
  console.log('your mobile number is',mobile)
    if(mobile==null){
      navigation.navigate('Login');
    }
    else{
      navigation.navigate('Quiz', {
        id: item.id,
        roundname:item.roundname
      });
    }
    }
    return(
         <View style={styles.container}>
           <Header
           title='HowToPlay'
           />
         <View style={styles.second}>
         <FlatList
         data={selector}
         renderItem={({item})=>(
             <TouchableOpacity 
             onPress={() => {checkIn(item)}}
             style={styles.card}>
                 <Text style={{color:'red'}}>{item.roundname}</Text>
                 <Text style={{color:'red'}}>{item.name}</Text>
             </TouchableOpacity>
         )}
         />
         </View>
         <StatusBar/>
         <BottomTab/>
       </View>
    )
}
export default HowTo;