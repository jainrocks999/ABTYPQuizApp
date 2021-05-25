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
import Loader from '../../../component/loader';
import Header from '../../../component/header';
import DatePicker from 'react-native-datepicker';
import Lang from '../../../component/language';

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
    const [password,setPassword]=useState('123456')
    const [confirm,setConfirm]=useState('123456')
    const [date, setDate] = useState('09-10-2020');

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
            {isFetching?<Loader/>:null}
            <Header
            title={Lang.Registration}
            />
           <ScrollView>
           <View style={styles.imageCont}>
               <Image style={{width:100,height:100}} 
               source={require('../../../assets/Images/logo1.jpg')}/>
           </View>
            <View style={styles.second}>
            <View style={styles.view}>
            <Text style={{fontFamily:'KRDEV011'}}>{Lang.FirstName}</Text>
            </View>
            <TextInput
            placeholder='Enter First Name'
            onChangeText={(text)=>setFirstName(text)}
            />
             <View style={styles.view1}>
            <Text style={{fontFamily:'KRDEV011'}}>{Lang.LastName}</Text>
            </View>
            <TextInput
            placeholder='Enter Last Name'
            onChangeText={(text)=>setLastName(text)}
            />
            <View style={styles.view1}>
            <Text style={{fontFamily:'KRDEV011'}}>{Lang.email}</Text>
            </View>
            <TextInput
            placeholder='Enter Email'
            onChangeText={(text)=>setEmail(text)}
            />
            <View style={styles.view1}>
            <Text style={{fontFamily:'KRDEV011'}}>{Lang.MobileNumber}</Text>
            </View>
            <TextInput
            placeholder='Enter Mobile Number'
            onChangeText={(text)=>setMobile(text)}
            />
            <View style={styles.view1}>
            <Text style={{fontFamily:'KRDEV011'}}>{Lang.Gender}</Text>
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
            <Text style={{fontFamily:'KRDEV011'}}>{Lang.DateOfBirth}</Text>
            </View>
            <TextInput
            placeholder='Enter Date Of Birth'
            onChangeText={(text)=>setDob(text)}
            keyboardType='number-pad'
            />
           
            <View style={styles.view1}>
            <Text style={{fontFamily:'KRDEV011'}}>{Lang.area}</Text>
            </View>
            <TextInput
            placeholder='Enter Area'
            onChangeText={(text)=>setArea(text)}
            />
            <View style={styles.view1}>
            <Text style={{fontFamily:'KRDEV011'}}>{Lang.Address}</Text>
            </View>
            <TextInput
            placeholder='Enter Address'
            onChangeText={(text)=>setAddress(text)}
            />
            <View style={styles.view1}>
            <Text style={{fontFamily:'KRDEV011'}}>{Lang.City}</Text>
            </View>
            <TextInput
            placeholder='Enter City Name'
            onChangeText={(text)=>setCity(text)}
            />
            <View style={styles.view1}>
            <Text style={{fontFamily:'KRDEV011'}}>{Lang.State}</Text>
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
            <Text style={{fontFamily:'KRDEV011'}}>{Lang.Pincode}</Text>
            </View>
            <TextInput
            placeholder='Enter Pincode Number'
            onChangeText={(text)=>setPincode(text)}
            keyboardType='number-pad'
            />
          
            <View style={styles.button}>
            <CustomButton
            title={Lang.Registration}
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
