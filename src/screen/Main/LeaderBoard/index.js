import React from 'react';
import { View,Text,Image, TouchableOpacity,FlatList } from 'react-native';
import BottomTab from '../../../component/StoreButtomTab';
import { useNavigation } from '@react-navigation/native';
import styles from './style';
import StatusBar from '../../../component/StatusBar';
import Header from '../../../component/header';
import { useSelector } from 'react-redux';
const Book=()=>{
  const navigation=useNavigation()
  const selector=useSelector(state=>state.LeaderBoard)
  const renderItem=(item)=>{
    return(
    <View>
      <Text>{item,name}</Text>
    </View>
    )
  }
    return(
         <View style={styles.container}>
           <Header
           title='Leader Board'
           />
         <View style={{flex:1}}>
          <FlatList
          data={selector}
          renderItem={({item})=>(
            <View style={styles.card}>
             <View style={{flexDirection:'row',justifyContent:'space-between'}}>
              <Text style={{fontFamily:'Poppins-Medium',color:'red'}}>Name: {item.name}</Text>
              <Text style={{fontFamily:'Poppins-Medium',fontSize:13,color:'red'}}>{item.start_date}</Text>
              </View>
              <Text style={{fontFamily:'Poppins-Medium',color:'red'}}>Total Score :{item.score}</Text>
            </View>
          )}
          />
         </View>
         <StatusBar/>
         <View style={{bottom:0,right:0,left:0,position:'absolute'}}>
         <BottomTab/>
         </View>
       </View>
    )
}
export default Book;
