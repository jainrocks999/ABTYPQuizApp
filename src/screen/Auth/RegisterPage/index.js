import React,{useState} from 'react';
import { View,Text, ScrollView ,Image,TouchableOpacity} from 'react-native';
import CustomButton from '../../../component/button1';
import { useNavigation } from '@react-navigation/native';
import TextInput from '../../../component/TextInput';
import styles from './style';
import Toast from 'react-native-simple-toast';
import AsyncStorage from '@react-native-community/async-storage';
import BottomTab from '../../../component/StoreButtomTab';
import ModalDropdown from 'react-native-modal-dropdown';
import StatusBar from '../../../component/StatusBar';
import { useDispatch,useSelector } from 'react-redux';

const data=['Others','Male','Femail']
const data1=['Andhra Pradesh','Arunachal Pradesh',
'Assam','Bihar','Chhattisgarh','Goa','Gujarat','Haryana','Haryana','Himachal Pradesh','Jharkhand','Karnataka',
'Kerala','Kerala','Maharashtra','Manipur','Meghalaya','Mizoram','Nagaland','Odisha','Punjab','Rajasthan','Sikkim',
'Tamil Nadu','Telangana','Tripura','Utter Pradesh','Uttarakhand','Best Bengal'
]
const RegisterPage=()=>{
    const navigation=useNavigation()
    const dispatch=useDispatch()
    const isFetching=useSelector((state)=>state.isFetching)
    const [first_name,setFirstName]=useState('')
    const [last_name,setLastName]=useState('')
    const [email_id,setEmail]=useState('')
    const [mobile,setMobile]=useState('')
    const [dob,setDob]=useState('')
    const [gender,setGender]=useState('')
    const [address,setAddress]=useState('')
    const [area,setArea]=useState('')
    const [city,setCity]=useState('')
    const [state,setState]=useState('')
    const [pincode,setPincode]=useState('')
    const [password,setPassword]=useState('')
    const [confirm,setConfirm]=useState('')

const userRegister=()=>{
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(first_name==''){
      Toast.show('Please Enter First Name')
    }
    else if(last_name==''){
      Toast.show('Please Enter Last Name')
    }
    else if(reg.test(email_id)==false){
        Toast.show('Please Enter Valid Email')
        return false
    }
    else if(mobile==''){
        Toast.show('Please Enter Mobile Number')
    }
    else if(gender==''){
        Toast.show('Please Select Gender')
    }
    else if(password==''){
        Toast.show('Please Enter Password')
    }
    else if(confirm!=password){
        Toast.show('Please Enter Confirm Password')
    }
    else if(dob==''){
        Toast.show('Please Enter Date Of Birth')
    }
    else if(area==''){
        Toast.show('Please Enter Area')
    }
    else if(address==''){
        Toast.show('Please Enter Address')
    }
    else if(city==''){
        Toast.show('Please Enter City Name')
    }
    else if(state==''){
        Toast.show('Please Select State Name')
    }
    else if(pincode==''){
        Toast.show('Please Enter Pincode Number')
    }
    else{
        dispatch({
          type: 'User_Register_Request',
          url: 'registration',
          first_name,
          last_name,
          mobile,
          email_id,
          dob,
          gender,
          address,
          area,
          city,
          password,
          state,
          otp:'',
          pincode,
          device_token:'',
          device_type:'',
          navigation:navigation
        })
      }
}

    return(
        <View style={styles.container}>
          <View style={styles.main}>
          <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
            <Image style={styles.image} source={require('../../../assets/Images/drawer1.png')}/>
            </TouchableOpacity>
            <Text style={styles.title}>Registration </Text>
            <View></View>
           </View>
           <ScrollView>

           <View style={{alignItems:'center',marginTop:20}}>
               <Image style={{width:100,height:100}} source={require('../../../assets/Images/logo1.jpg')}/>
           </View>
            <View style={styles.second}>
            <View style={styles.view}>
            <Text style={{fontFamily:'Poppins-Medium'}}>First Name</Text>
            </View>
            <TextInput
            placeholder='Enter First Name'
            onChangeText={(text)=>setFirstName(text)}
            />
             <View style={styles.view1}>
            <Text style={{fontFamily:'Poppins-Medium'}}>Last Name</Text>
            </View>
            <TextInput
            placeholder='Enter Last Name'
            onChangeText={(text)=>setLastName(text)}
            />
            <View style={styles.view1}>
            <Text style={{fontFamily:'Poppins-Medium'}}>Email</Text>
            </View>
            <TextInput
            placeholder='Enter Email'
            onChangeText={(text)=>setEmail(text)}
            />
            <View style={styles.view1}>
            <Text style={{fontFamily:'Poppins-Medium'}}>Mobile Number</Text>
            </View>
            <TextInput
            placeholder='Enter Mobile Number'
            onChangeText={(text)=>setMobile(text)}
            />
            <View style={styles.view1}>
            <Text style={{fontFamily:'Poppins-Medium'}}>Gender</Text>
            </View>
            <View style={styles.drop}>
            <ModalDropdown
            dropdownTextStyle={{fontSize:14}}
            isFullWidth={true}
            textStyle={{fontSize:15}}
            dropdownStyle={{width:'50%'}}
            onSelect={(text)=>setGender(text)}
             options={data}/>
            </View>
            <View style={styles.view1}>
            <Text style={{fontFamily:'Poppins-Medium'}}>Password</Text>
            </View>
            <TextInput
            placeholder='Enter Password'
            onChangeText={(text)=>setPassword(text)}
            />
            <View style={styles.view1}>
            <Text style={{fontFamily:'Poppins-Medium'}}>Confirm Password</Text>
            </View>
            <TextInput
            placeholder='Enter Confirm Password'
            onChangeText={(text)=>setConfirm(text)}
            />
            <View style={styles.view1}>
            <Text style={{fontFamily:'Poppins-Medium'}}>Date Of Birth</Text>
            </View>
            <TextInput
            placeholder='Enter Date Of Birth'
            onChangeText={(text)=>setDob(text)}
            />
            <View style={styles.view1}>
            <Text style={{fontFamily:'Poppins-Medium'}}>Area</Text>
            </View>
            <TextInput
            placeholder='Enter Area'
            onChangeText={(text)=>setArea(text)}
            />
            <View style={styles.view1}>
            <Text style={{fontFamily:'Poppins-Medium'}}>Address</Text>
            </View>
            <TextInput
            placeholder='Enter Address'
            onChangeText={(text)=>setAddress(text)}
            />
            <View style={styles.view1}>
            <Text style={{fontFamily:'Poppins-Medium'}}>City</Text>
            </View>
            <TextInput
            placeholder='Enter City Name'
            onChangeText={(text)=>setCity(text)}
            />
            <View style={styles.view1}>
            <Text style={{fontFamily:'Poppins-Medium'}}>State</Text>
            </View>
            <View style={styles.drop}>
            <ModalDropdown
            dropdownTextStyle={{fontSize:17}}
            isFullWidth={true}
            textStyle={{fontSize:14,}}
            dropdownStyle={{width:'50%'}}
            onSelect={(text)=>setState(text)}
             options={data1}/>
            </View>
            <View style={styles.view1}>
            <Text style={{fontFamily:'Poppins-Medium'}}>Pincode</Text>
            </View>
            <TextInput
            placeholder='Enter Pincode Number'
            onChangeText={(text)=>setPincode(text)}
            />
          
            <View style={{width:'100%',marginTop:30}}>
            <CustomButton
            title='Register'
            onPress={()=>userRegister()}
            /> 
            </View>
            </View>
         </ScrollView>
         <StatusBar/>
            <BottomTab/>
       </View>
    )
}
export default RegisterPage;
