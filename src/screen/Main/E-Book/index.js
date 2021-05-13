import React from 'react';
import { View,Text,Image,TouchableOpacity } from 'react-native';
import BottomTab from '../../../component/StoreButtomTab';
import styles from './style';
import { useNavigation } from '@react-navigation/native';
import StatusBar from '../../../component/StatusBar';
import Pdf from 'react-native-pdf';
const Book=()=>{
  const navigation=useNavigation()
  const source = {uri:'http://samples.leanpub.com/thereactnativebook-sample.pdf',cache:true};
    return(
         <View style={styles.container}>
           <View style={styles.main}>
            <TouchableOpacity onPress={()=>navigation.toggleDrawer()}>
            <Image style={styles.image} source={require('../../../assets/Images/drawer1.png')}/>
            </TouchableOpacity>
            <Text style={styles.book}>E-Book </Text>
            <View></View>
           </View>
         <View style={styles.second}>
         <View style={styles.main1}>
             <Pdf
                source={source}
                onLoadComplete={(numberOfPages,filePath)=>{
                    console.log(`number of pages: ${numberOfPages}`);
                }}
                onError={(error)=>{
                console.log(error);
              }}
              style={styles.pdf}
             />
           </View>
         </View>
         <StatusBar/>
         <BottomTab/>
       </View>
    )
}
export default Book;