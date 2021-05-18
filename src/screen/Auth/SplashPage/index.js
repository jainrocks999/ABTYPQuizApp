import React,{useEffect} from 'react';
import { View,Text,Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const Splash=()=>{
    const navigation=useNavigation()
    useEffect(() => {
        initial();
      }, []);
      const initial = async () => {
         setTimeout(() => navigation.navigate("Step"), 3000);
      }
      //Dashboard
    return(
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <Image style={{width:150,height:150}} source={require('../../../assets/Images/logo1.jpg')}/>
            <Text style={{fontSize:18,fontFamily:"KrutiDev010",color:'red',marginTop:10}}>
               ABTYP APP
            </Text>
        </View>
    )
}
export default Splash;