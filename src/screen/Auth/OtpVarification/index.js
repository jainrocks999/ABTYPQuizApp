import React,{useState} from 'react';
import { View,Text,Image,TouchableOpacity, ScrollView } from 'react-native';
import CustomButton from '../../../component/button1';
import TextInput from '../../../component/TextInput';
import { useSelector,useDispatch } from 'react-redux';
import Toast from 'react-native-simple-toast';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';
import Storage from '../../../component/AsyncStorage';
import Loader from '../../../component/loader';
import styles from './style';
import OTPTextInput  from 'react-native-otp-textinput';
import StatusBar from '../../../component/StatusBar';

const OtpVarification=()=>{

    const [otp,setOtp]=useState('')
    const navigation=useNavigation();
    const dispatch=useDispatch();
    const isFetching=useSelector((state)=>state.isFetching)

    const getMobile=async()=>{
        const email_id=await AsyncStorage.getItem(Storage.email)
        const mobile=await AsyncStorage.getItem(Storage.mobile)
        console.log('testing',mobile,email_id,otp)
        console.log('working--------------------------------',otp);
       if(otp==''){
        Toast.show('Please Enter OTP Code')
        }
        else{
          dispatch({
            type: 'OTP_Varification_Request',
            url: 'verify_otp',
            email_id,
            otp,
            mobile,
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
            <Text style={{fontFamily:'KRDEV011'}}>Enter OTP Here</Text>
            </View>
            <OTPTextInput
              handleTextChange={(code)=>setOtp(code)}
              inputCount={4}
              textInputStyle={{
                width: 40,
                height: 45,
                borderWidth: 1,
                borderColor:'red',
                borderRadius:6,
                color:'red'
              }}
              />
            <View style={{width:'100%',marginTop:30,marginBottom:50}}>
            <CustomButton
            title='Send'
            onPress={()=>getMobile()}
            /> 
            </View>
         </View>
         </ScrollView>
         <StatusBar/>
        </View>
       )
}
export default OtpVarification;