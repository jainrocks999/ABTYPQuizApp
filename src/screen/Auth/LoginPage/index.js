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
import Loader from '../../../component/loader';
import Header from '../../../component/header';
import Lang from '../../../component/language';
const Login=()=>{
    const navigation=useNavigation()
    const dispatch=useDispatch()
    const isFetching=useSelector((state)=>state.isFetching)
    const [email_id,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [mobile,setMobile]=useState('')
const validateUser=()=>{

    if(mobile==''){
        Toast.show('Please Enter Mobile Number')
    }
    else{
        dispatch({
          type: 'User_Login_Request',
          url: 'login',
          mobile,
          navigation: navigation,
        })
      }
}
    return(
        <View style={styles.container}>
         {isFetching?<Loader/>:null} 
          <ScrollView>
          <Header
          title={Lang.Login}
          />
           <View style={{alignItems:'center',marginTop:20}}>
               <Image style={{width:100,height:100}} source={require('../../../assets/Images/logo1.jpg')}/>
           </View>
           <View style={styles.second}> 
              <View style={{justifyContent:'flex-start',width:'100%',marginTop:5}}>
            <Text style={{fontFamily:'Krdev016'}}>{Lang.mobbile}</Text>
            </View>
           <TextInput
            placeholder='Enter Mobile Number'
            onChangeText={(text)=>setMobile(text)}
            keyboardType='number-pad'
            />
            <View style={{width:'100%',marginTop:30,marginBottom:50}}>
            <CustomButton
            title={Lang.Login}
            onPress={()=>validateUser()}
            /> 
          
            </View>
         </View>
         </ScrollView>
         <StatusBar/>
         <BottomTab/>
       </View>
    )
}
export default Login;
