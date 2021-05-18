import React,{useEffect} from 'react';
import { View,Text,Image,TouchableOpacity, FlatList } from 'react-native';
import BottomTab from '../../../component/StoreButtomTab';
import styles from './style';
import StatusBar from '../../../component/StatusBar';
import { useNavigation } from '@react-navigation/native';
import Header from '../../../component/header';
import { useDispatch,useSelector } from 'react-redux';

const HowTo=()=>{
  const dispatch=useDispatch()
  const navigation=useNavigation()
  const selector=useSelector(state=>state.CategoryList)
  console.log('i am working on selector data',selector)

    return(
         <View style={styles.container}>
           <Header
           title='HowToPlay'
           />
         <View style={styles.second}>
         <FlatList
         data={selector}
        // numColumns={2}
         renderItem={({item})=>(
             <TouchableOpacity 
             onPress={() => {
                navigation.navigate('Quiz', {
                  id: item.id,
                });
              }}
             style={styles.card}>
                 <Text style={{color:'red'}}>{item.roundname}</Text>
                 <Text style={{color:'red'}}>{item.name}</Text>
                 <Text style={{color:'red'}}>{item.id}</Text>
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