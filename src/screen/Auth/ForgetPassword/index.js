import React,{useState} from 'react';
import { View,Text,Image,TouchableOpacity, ScrollView } from 'react-native';
import CustomButton from '../../../component/button1';
import TextInput from '../../../component/TextInput';
import { useSelector,useDispatch } from 'react-redux';
import Toast from 'react-native-simple-toast';
import { useNavigation } from '@react-navigation/native';
import Loader from '../../../component/loader';
import styles from './style';

const forgot=()=>{
    const [email_id,setEmail]=useState('')
    const navigation=useNavigation();
    const dispatch=useDispatch();
    const isFetching=useSelector((state)=>state.isFetching)  

      const getForgot=()=>{
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
         if(reg.test(email_id)==false){
        Toast.show('Please Enter Valid Email')
        return false
         }
        else{
          dispatch({
            type: 'Forget_Password_Request',
            url: 'forgotpassword',
            email_id,
            navigation:navigation
          });
        }
      }
    return(
        <View style={styles.container}>
         {isFetching?<Loader/>:null}
         <ScrollView>
         <View style={styles.main1}>
           <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image style={styles.image} source={require('../../../assets/Images/arrow1.png')}/>
            </TouchableOpacity>
           </View>
           <View style={{width:'100%',alignItems:'center',marginTop:20}}>
           <Image style={{width:100,height:100}} source={require('../../../assets/Images/logo1.jpg')}/>
           </View>
           <View style={styles.second}>
            <View style={{justifyContent:'flex-start',width:'100%'}}>
            <Text style={{fontFamily:'Poppins-Medium'}}>Email</Text>
            </View>
           <TextInput
            placeholder='Enter Email'
            onChangeText={(text)=>setEmail(text)}
            />
            <View style={{width:'100%',marginTop:30,marginBottom:50}}>
            <CustomButton
            title='Send'
            onPress={()=>getForgot()}
            /> 
            </View>
         </View>
         </ScrollView>
        </View>
       )
}
export default forgot;