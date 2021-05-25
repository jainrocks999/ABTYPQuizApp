import React from 'react';
import { SafeAreaView, LogBox, } from 'react-native';
import { Provider } from 'react-redux';
import Store from './src/Redux/Store';
import RootApp from './src/navigator';
LogBox.ignoreLogs(['Warning: ...']); 
LogBox.ignoreAllLogs();

const App = () => {
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