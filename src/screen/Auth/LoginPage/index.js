import React,{useState} from 'react';
import { View,Text,Image,ScrollView ,TouchableOpacity} from 'react-native';
import CustomButton from '../../../component/button1';
import { useNavigation } from '@react-navigation/native';
import TextInput from '../../../component/TextInput';
import styles from './style';
import Toast from 'react-native-simple-toast';
import StatusBar from '../../../component/StatusBar';
import BottomTab from '../../../component/StoreButtomTab';
import { useDispatch,useSelector } from 'react-redux';
const Login=()=>{
    const navigation=useNavigation()
    const dispatch=useDispatch()
    const isFetching=useSelector((state)=>state.isFetching)
    const [email_id,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [mobile,setMobile]=useState('')
const validateUser=()=>{

    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(reg.test(email_id)==false){
        Toast.show('Please Enter Valid Email')
        return false
    }
    else if(password==''){
        Toast.show('Please Enter Password')
    }
    else if(mobile==''){
        Toast.show('Please Enter Mobile Number')
    }
    else{
        dispatch({
          type: 'User_Login_Request',
          url: 'login',
          email_id,
          password,
          mobile,
          navigation: navigation,
        })
      }
}
    return(
        <View style={styles.container}>
          <ScrollView>
           <View style={styles.main}>
           <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
            <Image style={styles.image} source={require('../../../assets/Images/drawer1.png')}/>
            </TouchableOpacity>
            <Text style={styles.title}>Login </Text>
            <View></View>
           </View>
           <View style={{alignItems:'center',marginTop:20}}>
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
             <View style={{justifyContent:'flex-start',width:'100%',marginTop:5}}>
            <Text style={{fontFamily:'Poppins-Medium'}}>Password</Text>
            </View>
           <TextInput
            placeholder='Enter Password'
            onChangeText={(text)=>setPassword(text)}
            />
              <View style={{justifyContent:'flex-start',width:'100%',marginTop:5}}>
            <Text style={{fontFamily:'Poppins-Medium'}}>Mobile</Text>
            </View>
           <TextInput
            placeholder='Enter Mobile Number'
            onChangeText={(text)=>setMobile(text)}
            />
            <View style={{width:'100%',marginTop:30,marginBottom:50}}>
            <CustomButton
            title='Login'
            onPress={()=>validateUser()}
            /> 
            <View style={{width:'100%',alignItems:'flex-end',marginTop:10}}>
            <Text onPress={()=>navigation.navigate('Mobile')} style={{fontFamily:'Poppins-Bold'}}>Forget Password?</Text>
            </View>
            </View>
         </View>
         </ScrollView>
         <StatusBar/>
         <BottomTab/>
       </View>
    )
}
export default Login;
