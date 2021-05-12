// import React, { useEffect } from 'react';
// import { SafeAreaView, LogBox, NativeModules, } from 'react-native';
// import RootApp from './src/navigator';
// import { useNavigation } from '@react-navigation/native';
// LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
// LogBox.ignoreAllLogs();//Ignore all log notifications

// const App = () => {
//   return (
//     <SafeAreaView style={{
//       flex: 1,
//     }}>
//       <RootApp />
//     </SafeAreaView>
//   );
// }
// export default App;
import React, { useEffect } from 'react';
import { SafeAreaView, LogBox, NativeModules, } from 'react-native';
import { Provider, useDispatch } from 'react-redux';
import Store from './src/Redux/Store';
import RootApp from './src/navigator';
import DeviceInfo from 'react-native-device-info';
LogBox.ignoreLogs(['Warning: ...']); 
LogBox.ignoreAllLogs();

const App = () => {
  useEffect(async()=>{
    const value=DeviceInfo.getDeviceType()
    const value1=await DeviceInfo.getDeviceToken()
   DeviceInfo.getDeviceToken().then((deviceToken) => {
     console.log("token",deviceToken);
    });
      console.log('value',value);
  },[])
  return (
    <SafeAreaView style={{
      flex: 1,
    }}>
      <Provider store={Store}>
        <RootApp />
      </Provider>
    </SafeAreaView>
  );
}
export default App;