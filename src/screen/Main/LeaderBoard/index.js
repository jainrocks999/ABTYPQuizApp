import React from 'react';
import { View,Text,Image, TouchableOpacity,FlatList } from 'react-native';
import BottomTab from '../../../component/StoreButtomTab';
import { useNavigation } from '@react-navigation/native';
import styles from './style';
import StatusBar from '../../../component/StatusBar';
import Header from '../../../component/header';
const Book=()=>{
  const navigation=useNavigation()
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
         <View style={styles.second}>
          <FlatList
          data={data}
          renderItem={({item})=>(
            <View style={styles.card}>
             <View style={{flexDirection:'row',justifyContent:'space-between'}}>
              <Text style={{fontFamily:'Poppins-Medium'}}>Name: {item.name}</Text>
              <Text style={{fontFamily:'Poppins-Medium',fontSize:13}}>{item.Time}</Text>
              </View>
              <Text style={{fontFamily:'Poppins-Medium'}}>Total Score :{item.TotalScore}</Text>
            </View>
          )}
          />
         </View>
         <StatusBar/>
         <BottomTab/>
       </View>
    )
}
export default Book;
const data=[
  {name:'Manoj',Time:'08:00 am',TotalScore:'334'},
  {name:'Remesh',Time:'09:00 am',TotalScore:'604'},
  {name:'Suresh',Time:'10:00 am',TotalScore:'543'},
  {name:'Gyanendra',Time:'11:00 am',TotalScore:'123'},
  {name:'Ravi',Time:'12:00 am',TotalScore:'654'},
  {name:'Raj',Time:'01:00 am',TotalScore:'278'},
  {name:'Mahesh',Time:'02:00 am',TotalScore:'290'},
  {name:'Ajay',Time:'03:00 am',TotalScore:'136'},
  {name:'Pulkit',Time:'04:00 am',TotalScore:'543'},
  {name:'Sufiyan',Time:'05:00 am',TotalScore:'456'},
  {name:'Sachin',Time:'06:00 am',TotalScore:'236'},
  {name:'Manjit',Time:'07:00 am',TotalScore:'901'},

]