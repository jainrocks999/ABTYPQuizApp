import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SplashScreen from "../screen/Auth/SplashPage";
import DashBoardPage from "../screen/DashboardPage";
import MobileVarification from '../screen/Auth/MobileVarification';
import OtpVarification from '../screen/Auth/OtpVarification'
import Summery from '../screen/Main/Summery';

const Stack = createStackNavigator();
function Navigate() {
  return (
    //InitialPages
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash" headerMode="none">
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Dashboard" component={DashBoardPage} /> 
        <Stack.Screen name="Mobile" component={MobileVarification}/>
        <Stack.Screen name="Otp" component={OtpVarification}/>
        <Stack.Screen name="Summery" component={Summery}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default Navigate;
