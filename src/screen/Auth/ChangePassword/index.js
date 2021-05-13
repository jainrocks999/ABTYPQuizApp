import React,{useState} from 'react';
import { View,Text,Image,TouchableOpacity ,ScrollView} from 'react-native';
import CustomButton from '../../../component/button1';
import TextInput from '../../../component/TextInput';
import { useSelector,useDispatch } from 'react-redux';
import Toast from 'react-native-simple-toast';
import { useNavigation } from '@react-navigation/native';
import BottomTab from '../../../component/StoreButtomTab';
import Loader from '../../../component/loader';
import styles from './styles';
import AsyncStorage from '@react-native-community/async-storage';
import Storage from '../../../component/AsyncStorage';

const ChangePassword=()=>{
    const [password,setOldPassword]=useState('')
    const [newpassword,setNewPassword]=useState('')
    const [confirm,setConfirm]=useState('')
    const navigation=useNavigation();
    const dispatch=useDispatch();
    const isFetching=useSelector((state)=>state.isFetching)

      let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      const getForgot=async()=>{
      const userid=await AsyncStorage.getItem(Storage.userid)
      console.log('this is',userid);
        if(password==''){
          Toast.show('Please Enter Old Password')
        }
        else if(newpassword==''){
          Toast.show('Please Enter New Password')
        }
        else if(confirm!=newpassword){
          Toast.show('Please Enter Match Password')
        }
        else{
          dispatch({
            type: 'Change_Password_Request',
            url: 'change_password',
            userid,
            password,
            newpassword
          });
        }
      }
    return(
        <View style={styles.container}>
         {isFetching?<Loader/>:null}
         <ScrollView>
         <View style={styles.main1}>
           <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
            <Image style={styles.image} source={require('../../../assets/Images/drawer1.png')}/>
            </TouchableOpacity>
            <Text style={styles.title}>Change Password </Text>
            <View></View>
           </View>
           <View style={styles.logo}>
           <Image style={{width:100,height:100}} source={require('../../../assets/Images/logo1.jpg')}/>
           </View>
           <View style={styles.second}>
            <View style={styles.view}>
            <Text style={{fontFamily:'Poppins-Medium'}}>Old Password</Text>
            </View>
           <TextInput
            placeholder='Enter Old Password'
            onChangeText={(text)=>setOldPassword(text)}
            />
             <View style={[styles.view,{marginTop:7}]}>
            <Text style={{fontFamily:'Poppins-Medium'}}>New Password</Text>
            </View>
            <TextInput
            placeholder='Enter New Password'
            onChangeText={(text)=>setNewPassword(text)}
            />
             <View style={[styles.view,{marginTop:7}]}>
            <Text style={{fontFamily:'Poppins-Medium'}}>Confirm Password</Text>
            </View>
            <TextInput
            placeholder='Enter Confirm Password'
            onChangeText={(text)=>setConfirm(text)}
            />
            <View style={{width:'100%',marginTop:30,marginBottom:50}}>
            <CustomButton
            title='Change Password'
            onPress={()=>getForgot()}
            />
            </View>
         </View>
         </ScrollView>
         <BottomTab/>
        </View>
       )
}
export default ChangePassword;