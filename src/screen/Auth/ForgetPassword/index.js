import React,{useState} from 'react';
import { View,Text,Image,TouchableOpacity } from 'react-native';
import CustomButton from '../../../component/button1';
import TextInput from '../../../component/TextInput';
// import {Input} from 'react-native-elements';
import { useSelector,useDispatch } from 'react-redux';
import Toast from 'react-native-simple-toast';
import { useNavigation } from '@react-navigation/native';
//import Loader from '../../../component/Loader';
import styles from './style';

const forgot=()=>{
    const [mobile,setMobile]=useState('')
    const navigation=useNavigation();
    const dispatch=useDispatch();
    const isFetching=useSelector((state)=>state.isFetching)

      let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      const getForgot=()=>{
        if(mobile==''){
          Toast.show('Please Enter Mobile Number')
        }
        else{
          dispatch({
            type: 'User_Forgot_Password_Request',
            url: 'reset_password',
            mobile,
          });
        }
      }
    return(
        <View style={styles.container}>
         {/* {isFetching?<Loader/>:null} */}
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
            onChangeText={(text)=>setMobile(text)}
            />
            <View style={{width:'100%',marginTop:30,marginBottom:50}}>
            <CustomButton
            title='Send'
           // onPress={()=>validateUser()}
            /> 
            </View>
         </View>
        </View>
       )
}
export default forgot;