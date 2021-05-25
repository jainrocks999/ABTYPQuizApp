import React,{useEffect} from 'react';
import { View,Text,Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './style';
const Splash=()=>{
    const navigation=useNavigation()
    useEffect(() => {
        initial();
      }, []);
      const initial = async () => {
         setTimeout(() => navigation.replace("Dashboard"), 2000);
      }
    return(
        <View style={styles.container}>
            <Image style={styles.image} 
             source={require('../../../assets/Images/logo1.jpg')}/>
            <Text style={styles.text}>
               ABTYP APP
            </Text>
        </View>
    )
}
export default Splash;