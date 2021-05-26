import React, { useState, useEffect } from 'react';
import { View, Image, ScrollView, Alert,TouchableOpacity } from 'react-native';
import {
    DrawerContentScrollView,
} from '@react-navigation/drawer';
import AsyncStorage from "@react-native-community/async-storage";
import { useNavigation } from '@react-navigation/native';
import lang from '../../component/language';
import {
    Avatar,
    Title,
    Caption,
    Text,
} from 'react-native-paper';
import styles from './styles';
import Storage from '../AsyncStorage';
import { useSelector,useDispatch } from 'react-redux';


export default function DrawerContent(props) {
    const navigation = useNavigation();
    const [Email, setEmail] = useState("");
    const [Name, setName] = useState("");
    const [mobile,setMobile]=useState('')
    const dispatch=useDispatch()
    useEffect(() => {
        initial();
    }, []);

    const initial = async () => {
        let Email = await AsyncStorage.getItem(Storage.email);
        let Name = await AsyncStorage.getItem(Storage.name);
        let mobileN=await AsyncStorage.getItem(Storage.mobile)
        setEmail(Email);
        setName(Name);
        setMobile(mobileN)
    }
    const getLogout=async()=>{
        const userid=await AsyncStorage.getItem(Storage.userid)
          dispatch({
              type: 'User_Logout_Request',
              url: 'logout',
             userid,
             navigation: navigation,
            });
      }

    const Logout = () => {
        console.log('this is working');
        Alert.alert(
            "Are you want to logout ?",
            "",
            [
                {
                    text: "Cancel",
                    onPress: () => {
                        cancelable: false;
                    },
                    style: "cancel",
                },
                { text: "ok", onPress: () => getLogout() },
            ],
            { cancelable: false }
        );
    };
    const setlog = () => {
        try {
            AsyncStorage.clear();
            navigation.navigate("Login");
        } catch (error) {
            console.error(error);
        }
    };
    return (
        <DrawerContentScrollView {...props}>
            <ScrollView showsVerticalScrollIndicator={false} style={styles.drawerContent}>
                <View style={[styles.drawers]}>
                    <Image style={{width:100,height:100}} source={require('../../assets/Images/logo1.jpg')}/>
                   {!Email?
                   <View style={styles.profile}>
                    <Text style={styles.title}>{lang.RegisterToProfileView}</Text>
                    </View>:
                    <View style={styles.profile}>
                        <Title style={styles.title}>{Name}</Title>
                        <Caption style={styles.caption}>{mobile}</Caption>
                    </View>}
                </View>
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('Login')
                    }}>
                    <View style={[styles.drawer, {}]}>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={styles.iconView}>
                                <Image style={styles.imageicon} source={require('../../assets/Images/login.jpg')}/>
                            </View>
                            <Text style={styles.text}>{lang.Login}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('Register')
                    }}>
                    <View style={[styles.drawer]}>
                        <View style={{ flexDirection: 'row' }}>
                        <View style={styles.iconView}>
                                <Image style={styles.imageicon} source={require('../../assets/Images/register.png')}/>
                            </View>
                            <Text style={styles.text}> {lang.Registration}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('Leader')
                    }}>
                    <View style={[styles.drawer]}>
                        <View style={{ flexDirection: 'row' }}>
                        <View style={styles.iconView}>
                                <Image style={styles.imageicon} source={require('../../assets/Images/leader.png')}/>
                            </View>
                            <Text style={styles.text}>{lang.LeaderBoard}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
               
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('Contact')
                    }}>
                    <View style={[styles.drawer]}>
                        <View style={{ flexDirection: 'row' }}>
                        <View style={styles.iconView}>
                                <Image style={styles.imageicon} source={require('../../assets/Images/contact.png')}/>
                            </View>
                            <Text style={styles.text}>{lang.ContactUs}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('Book')
                    }}>
                    <View style={[styles.drawer]}>
                        <View style={{ flexDirection: 'row' }}>
                        <View style={styles.iconView}>
                                <Image style={styles.imageicon} source={require('../../assets/Images/book.png')}/>
                            </View>
                            <Text style={styles.text}>{lang.Ebook}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
               
                <TouchableOpacity>
                     {mobile?
                    <TouchableOpacity 
                    onPress={()=>Logout()}
                    style={[styles.drawer]}>
                        <View style={{ flexDirection: 'row' }}>
                        <View style={styles.iconView}>
                                <Image style={styles.imageicon} source={require('../../assets/Images/logout.png')}/>
                            </View>
                            <Text style={styles.text}>{lang.Logout}</Text>
                        </View>
                    </TouchableOpacity>
                     :
                     <View></View>
                 } 
                </TouchableOpacity>
               
            </ScrollView>
        </DrawerContentScrollView>
    );
}
