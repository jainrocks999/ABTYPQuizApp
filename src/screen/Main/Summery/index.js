import React,{useState} from 'react';
import { View,Image,Text, ScrollView,ImageBackground,TouchableOpacity,Share, ShadowPropTypesIOS } from 'react-native';
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
    share=async()=>{
      await Share.share({
        message:
         `Correct Question ${this.state.correctCount} and Wrong Question ${this.state.totalQuestion-this.state.correctCount}`
      });
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
                 <TouchableOpacity
                  onPress={()=>this.share()}
                  style={[styles.main,{flexDirection:'row'}]}>
                  <Image
                   style={{width:14,height:14}}
                   source={(require('../../../assets/Images/Vector.png'))}
                  />
                  <Text style={[styles.take,{marginLeft:4}]}>Share Result</Text>
                </TouchableOpacity>
                </View>
                <View style={{width:'47%'}}>
                <TouchableOpacity 
                onPress={()=>this.props.navigation.navigate('Category')}
                style={styles.main}>
                  <Text style={styles.take}>Take New Quiz</Text>
                </TouchableOpacity>
                </View>
                </View>
                <TouchableOpacity
                onPress={()=>this.props.navigation.navigate('Home')}
                style={styles.x}>
                <Text style={styles.text1}>x</Text>
                </TouchableOpacity>
             </View>
             </ScrollView>
             <StatusBar/>
            </ImageBackground>
           )
    }
}