import React,{useState} from 'react';
import { View,Image,Text, ScrollView,ImageBackground,TouchableOpacity } from 'react-native';
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
     const data=(this.state.correctCount*100)/this.state.totalQuestion
        return(
            <ImageBackground source={require('../../../assets/Images/bg-img.png')} style={styles.container}>
             <ScrollView>
               <View style={styles.imageCont}>
                <Text style={styles.quiz}>Quiz Result </Text>
               <Image style={styles.image1} 
               source={require('../../../assets/Images/trophy.png')}/>
               </View>
               <View style={styles.second}>
                 <Text style={styles.cong}>Congratulations </Text>
                 <Text style={styles.same}>Consectetur edipiscing elit.Aenean</Text>
                 <Text style={styles.same}> euis bibendum laoreet</Text>
                 <Text style={styles.score}>YOUR SCORE </Text>
                 <View style={styles.title}>
                 <Text style={styles.correct}>{`${this.state.correctCount} `}</Text>
                 <Text style={styles.wrong}>{`/ ${this.state.totalQuestion}`} </Text>
                 </View>
                 <Text style={styles.coins}>{`EARN COINS`}</Text>
                 <View style={styles.view}>
                   <Image style={{width:30,height:27}} source={require('../../../assets/Images/coins.png')}/>
                   <Text style={styles.five}>500 </Text>
                 </View>
                <View style={styles.button}>
                <View style={{width:'47%'}}>
                <CustomButton
                title='Share Result'
                textStyle={{fontSize:15}}
                />  
                </View>
                <View style={{width:'47%'}}>
                 <CustomButton
                 title='Take New Quiz'
                 onPress={()=>this.props.navigation.navigate('Category')}
                 textStyle={{fontSize:15}}
                />  
                </View>
                </View>
                <TouchableOpacity
                onPress={()=>this.props.navigation.navigate('Home')}
                style={styles.x}>
                <Text style={{color:'white',fontSize:30}}>x</Text>
                </TouchableOpacity>
             </View>
             </ScrollView>
             <StatusBar/>
            </ImageBackground>
           )
    }
}