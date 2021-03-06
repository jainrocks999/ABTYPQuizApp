import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerContent from '../../component/DrawerPage';
import QuizScreen from '../../screen/Main/QuizScreen';
import AboutABTYP from '../../screen/Main/AboutABTYP';
import HomeScreen from '../../screen/Main/HomeScreen';
import HowToPlay from '../../screen/Main/HowToPlay';
import Contact from '../../screen/Main/Contact';
import Book from '../../screen/Main/E-Book';
import LeaderBoard from '../../screen/Main/LeaderBoard';
import RegisterPage from '../../screen/Auth/RegisterPage';
import LoginPage from "../../screen/Auth/LoginPage";
import CategoryScreen from '../../screen/Main/CategoryScreen';
const Drawer = createDrawerNavigator();
function MyDrawer() {
  return (
    <Drawer.Navigator drawerContent={() => <DrawerContent />}>
        <Drawer.Screen name="Home" component={HomeScreen} />
       <Drawer.Screen name="About" component={AboutABTYP} />
       <Drawer.Screen name="Quiz" component={QuizScreen} />
       <Drawer.Screen name='Category' component={CategoryScreen}/>
     
       <Drawer.Screen name="HowTo" component={HowToPlay} />
       <Drawer.Screen name="Login" component={LoginPage} />
       <Drawer.Screen name='Contact' component={Contact}/> 
       <Drawer.Screen name='Book' component={Book}/>
       <Drawer.Screen name='Leader' component={LeaderBoard}/>
       <Drawer.Screen name='Register' component={RegisterPage}/>
    </Drawer.Navigator>
  );

}
export default MyDrawer;