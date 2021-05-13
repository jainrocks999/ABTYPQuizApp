import {takeEvery, put, call} from 'redux-saga/effects';
import Api from '../Api';
import AsyncStorage from '@react-native-community/async-storage';
import Toast from 'react-native-simple-toast';
import Storage from '../../component/AsyncStorage';

//Login
function* doLogin(action) {
  try{
  const data = new FormData();
  data.append('mobile',action.mobile)
  const response = yield call(Api.fetchDataByPOST, action.url, data);
  if (response.status==true) {
    yield put({
      type: 'User_Login_Success',
      payload: response.user,
    });
      Toast.show(response.msg);
      AsyncStorage.setItem(Storage.userid,response.user.userid)
      AsyncStorage.setItem(Storage.email,response.user.email)
      AsyncStorage.setItem(Storage.mobile,response.user.phone)

     action.navigation.navigate('Mobile');
  } else {
    Toast.show(response.msg);
    yield put({
      type: 'User_Login_Error',
    });
  }
}
catch(error){
 Toast.show(error.message)
}
}

//Register
function* doRegister(action) {
  try{
  const data = new FormData();
  data.append('first_name', action.first_name);
  data.append('last_name', action.last_name);
  data.append('mobile',action.mobile)
  data.append('email_id', action.email_id);
  data.append('dob', action.dob);
  data.append('gender',action.gender)
  data.append('address', action.address);
  data.append('area', action.area);
  data.append('city',action.city)
  data.append('password', action.password);
  data.append('state', action.state);
  data.append('pincode',action.pincode)
  data.append('otp', action.opt);
  data.append('device_token', action.device_token);
  data.append('device_type',action.device_type)
  const response = yield call(Api.fetchDataByPOST, action.url, data);
  if (response.status==true) {
    Toast.show(response.msg);
    yield put({
      type: 'User_Register_Success',
      payload: response.data,
    });
    action.navigation.navigate('Login');
  } else {
   Toast.show(response.msg);
    yield put({
      type: 'User_Register_Error',
    });
  }
}
catch(error){
 Toast.show(error.message)
 console.log(error.message)
}
}
////Logout
function* logout(action) {
  try{
  const data = new FormData();
  data.append('userid',action.userid)
  const response = yield call(Api.fetchDataByPOST, action.url, data);
  if (response.status==true) {
    yield put({
      type: 'User_Logout_Success',
      payload: response.user,
    });
      Toast.show(response.msg);
      action.navigation.navigate('Login')
  } else {
    Toast.show(response.msg);
    yield put({
      type: 'User_Logout_Error',
    });
  }
}
catch(error){
 Toast.show(error.message)
}
}
/////Mobile Varification
function* mobileVarification(action) {
  try{
  const data = new FormData();
  data.append('mobile',action.mobile)
  data.append('email_id',action.email_id)
  const response = yield call(Api.fetchDataByPOST, action.url, data);
  if (response.status==true) {
    yield put({
      type: 'Mobile_Varification_Success',
      payload: response.user,
    });
      Toast.show(response.msg);
      action.navigation.navigate('Otp')
  } else {
    Toast.show(response.msg);
    yield put({
      type: 'Mobile_Varification_Error',
    });
  }
}
catch(error){
 Toast.show(error.message)
     }
}

/////OTP Varification
function* OTPVarification(action) {
  try{
  const data = new FormData();
  data.append('email_id',action.email_id)
  data.append('otp',action.otp)
  const response = yield call(Api.fetchDataByPOST, action.url, data);
  if (response.status==true) {
    yield put({
      type: 'OTP_Varification_Success',
      payload: response.user,
    })
      Toast.show(response.msg);
      action.navigation.navigate('Quiz')
  } else {
    Toast.show(response.msg);
    yield put({
      type: 'OTP_Varification_Error',
    });
  }
}
catch(error){
 Toast.show(error.message)
     }
}

export default function* authSaga() {
  yield takeEvery('User_Login_Request', doLogin);
  yield takeEvery('User_Register_Request', doRegister);
  yield takeEvery('User_Logout_Request', logout);
  yield takeEvery('Mobile_Varification_Request',mobileVarification)
  yield takeEvery('OTP_Varification_Request',OTPVarification)
}
