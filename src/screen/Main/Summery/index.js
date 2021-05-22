import React,{useState} from 'react';
import { View,Image,Text, ScrollView } from 'react-native';
import CustomButton from '../../../component/button1';

import styles from './style';
import StatusBar from '../../../component/StatusBar';

export default class Summery extends React.Component{
    constructor(props){
        super(props)
        this.state = {
          correctCount:this.props.route.params.correctCount,
          totalQuestion:this.props.route.params.totalQuestion
        };
      }
    render(){
        console.log('here i am testing',this.state.correctCount,this.state.totalQuestion)
        return(
            <View style={styles.container}>
             <ScrollView>
             <View style={styles.main1}>
               </View>
               <View style={{width:'100%',alignItems:'center',marginTop:20}}>
               <Image style={{width:100,height:100}} source={require('../../../assets/Images/logo1.jpg')}/>
               </View>
               <View style={styles.second}>
                <View>
                <Image  style={{width:'100%',height:150,}} source={require('../../../assets/Images/cong2.png')}/>
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                    <Text style={{fontWeight:'700',color:'red',fontSize:17}}>{`Correct Answer:${this.state.correctCount}`} </Text>
                    <Text style={{fontWeight:'700',color:'red',fontSize:17}}>{`Wrong Answer:${this.state.totalQuestion-this.state.correctCount}`} </Text>
                </View>
                <View style={{width:'100%',marginTop:50}}>
                <CustomButton
                title='Done'
                onPress={()=>this.props.navigation.navigate('Home')}
                />  
                </View>
             </View>
             </ScrollView>
             <StatusBar/>
            </View>
           )
    }
}