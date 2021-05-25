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
             <View style={styles.main1}>
              <Text style={styles.name}>Name: {item.name}</Text>
              <Text style={styles.time}>{item.start_date}</Text>
              </View>
              <Text style={styles.score}>Total Score :{item.score}</Text>
            </View>
          )}
          />
         </View>
         <StatusBar/>
         <View style={styles.bottom}>
         <BottomTab/>
         </View>
       </View>
    )
}
export default Book;
