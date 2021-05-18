import React from "react";
import { View,Text, SafeAreaView, Alert,Image, ScrollView,TouchableOpacity} from "react-native";
import { Button, ButtonContainer } from "../../../component/quizComponent/Button";
import  {Popup}  from "../../../component/quizComponent/Popup";
import BottomTab from '../../../component/StoreButtomTab';
import styles from './style';
import StatusBar from '../../../component/StatusBar';
import Header from "../../../component/header";
import { connect } from 'react-redux';

class Quiz extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      correctCount: 0,
      totalCount:0,
      activeQuestionIndex: 0,
      answered: false,
      answerCorrect: false,
      index:0,
      data:[],
      disable:false,
      color:'',
      questions:questions,
      timer: null,
      counter: 60,
      id: this.props.route.params.id,
      questionList:[],
      //apiCall()
    };
  }
  apiCall=()=>{
    this.props.dispatch({
      type:'GetQuiz_List_Request',
      url:'getquestion_quizbyid',
      quiz_id:this.state.id
    })
  }
  componentDidMount() {
    this.apiCall()
    const {counter} = this.state
    console.log(' i amd dtrkjdlkadjfk',this.state.id)
    let timer = setInterval(this.tick, 1000);
    this.setState({timer});
  }

  componentWillUnmount() {
    clearInterval(this.state.timer);
  }

  tick =() => {
    const {counter} = this.state
    if (counter == 0) {
        clearInterval(this.state.timer);
    } else {
        this.setState({
            counter: this.state.counter - 1
          });
    }  
   
  }
  answer = (correct) => {
  if(correct==1){
    this.setState(
      state => {
        const nextState = { answered: 1 };
        state.disable=true;
        //state.questions[state.index].answers[index].color='green'
        if (correct) {
          nextState.correctCount = state.correctCount + 1;
          nextState.answerCorrect = true;
        } else {
          nextState.answerCorrect = false;
        }
        return nextState;
      },
      () => {
        setTimeout(() => this.nextQuestion(), 600);
      }
    );
  }
  else{
    this.setState(
      state => {
        const nextState = { answered: true };
        state.disable=true;
        // state.questions[state.index].answers[index].correct==true?
        // state.questions[state.index].answers[index].color='green':
        // state.questions[state.index].answers[index].color='red'
        if (correct==1) {
          nextState.correctCount = state.correctCount + 1;
          nextState.answerCorrect = true;
        } else {
          nextState.answerCorrect = false;
        }
        return nextState;
      },
      () => {
        setTimeout(() =>this.state.counter!=0? this.nextQuestion():this.alertFunction(), 600);
      }
    );
  }
   
  };
alertFunction=()=>{
  Alert.alert(
    "Quiz Result",
    "Correct answer  "+this.state.correctCount,
    [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel"
      },
      { text: "OK", onPress: () => console.log("OK Pressed") }
    ],
    { cancelable: false }
  );
}

  nextQuestion = () => {
    const list=this.props.CategoryList
    try {
      this.setState(state => {
        const nextIndex = state.activeQuestionIndex + 1;
          if (nextIndex >= list.length+1) {
          return this.props.navigation.popToTop();
        }
        return {
          activeQuestionIndex: nextIndex,
          answered: false
        }
        
      },
       ()=>{setTimeout(()=>this.next(),1000)}
      );
    } catch (error) {
      console.log(error);
    }
    
  };
   
     next = () => {
      const list=this.props.CategoryList
        if(this.state.index <=list.length-2){
        this.setState(state => {
          const index = state.index + 1;
          state.disable=false
          return {
            index: index,
          };
        });
       }
       else{
       this.alertFunction()
       }
    };
    previous = () => {
      const list=this.props.CategoryList
      if(this.state.index <=list.length-1 ){
        if(this.state.index!=0){
       this.setState(state => {
         const index = state.index - 1;
         state.disable=true
         return {
           index: index,
         };
       });}
      }
      
      else{
      }
   };
  
  render() {
  const {CategoryList}= this.props
  const list=CategoryList
    return (
     <View style={{flex:1}}>
      <View style={{flex:1}}>
          <Header
          title='Quiz Screen'
          />
        <ScrollView>
        <View style={styles.view}>
          <View style={styles.view1}>
          <View style={{alignSelf:'flex-start',}}>
          <Text style={[styles.text]}>
          Total Question </Text>
        <Text style={[{textAlign:'center',marginLeft:10},styles.text]}>{list.length}</Text>
          </View>
          <View style={{alignSelf:'flex-end'}}>
          <Text style={[styles.text]}>
          Timer </Text>
          <Text style={[{textAlign:'center'},styles.text]}>
           {this.state.counter}
          </Text> 
          </View>
         
          </View>
          <View style={{paddingHorizontal:10,marginTop:10}}>
           <Text style={[{alignSelf:'center'},styles.text]}>{list[this.state.index].question}</Text>
        </View>
        </View>
          <SafeAreaView style={{marginBottom:60}}>
          <View style={{paddingHorizontal:10,justifyContent:'center',alignItems:'center',marginTop:50}}>
            {/* <ButtonContainer>
            {list[this.state.index].answers.map((answer,index)=>(
               <Button
               disable={this.state.disable}
                color={answer.color}
                 text={answer.text}
                 onPress={() => this.answer(answer.correct,index)}
               /> 
            ))}  
            </ButtonContainer> */}
            <TouchableOpacity 
            onPress={()=>
              this.answer(list[this.state.index].option_a_correct)
            }
            style={styles.button1}>
              <Text style={{color:'white',fontSize:18}}>{list[this.state.index].option_a}</Text>
            </TouchableOpacity>
            <TouchableOpacity
             onPress={()=>
              this.answer(list[this.state.index].option_b_correct)
            }
             style={styles.button1}>
              <Text style={{color:'white',fontSize:18}}>{list[this.state.index].option_b}</Text>
            </TouchableOpacity>
            <TouchableOpacity
             onPress={()=>
              this.answer(list[this.state.index].option_c_correct)
            }
             style={styles.button1}>
              <Text style={{color:'white',fontSize:18}}>{list[this.state.index].option_c}</Text>
            </TouchableOpacity>
            <TouchableOpacity
             onPress={()=>
              this.answer(list[this.state.index].option_d_correct)
            }
             style={styles.button1}>
              <Text style={{color:'white',fontSize:18}}>{list[this.state.index].option_d}</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView> 
        </ScrollView>
      </View>
       <StatusBar/>
      <BottomTab/>
      </View>
    );
  }
}
const mapStateToProps = state => {
  return {
    isFetching: state.isFetching,
    CategoryList:state.GetListById
  };
};
export default connect(mapStateToProps)(Quiz);

  const questions = [
    {
      question: "How can you create a new React Native project?",
      answers: [
        { id: "1", text: "npx create-react-app new-app" ,color:'#42cef5' },
        { id: "2", text: "npx react-native init new-app", correct: true ,color:'#42cef5'},
        { id: "3", text: "npm create-react-native-app new-app"  ,color:'#42cef5'},
        { id: "4", text: "expo run new-app"  ,color:'#42cef5'}
      ]
    },
    {
      question: "How to run react native app ?",
      answers: [
        { id: "1", text: "npx run android" ,color:'#42cef5' },
        { id: "2", text: "npx react-native-run-android"  ,color:'#42cef5'},
        { id: "3", text: "npx react-native run-android", correct: true ,color:'#42cef5' },
        { id: "4", text: "react-native run android" ,color:'#42cef5' }
      ]
    },
    {
      question: "Command to Clean android in react native",
      answers: [
        { id: "1", text: "./gradlew clean", correct: true  ,color:'#42cef5'},
        { id: "2", text: "android clean" ,color:'#42cef5'},
        { id: "3", text: "./gradlew assembleRelease" ,color:'#42cef5' },
        { id: "4", text: "./gradlew bat" ,color:'#42cef5' }
      ]
    },
    {
      question: "What kind of fruit was used to name a computer in 1984?",
      answers: [
        { id: "1", text: "Blackberry" ,color:'#42cef5' },
        { id: "2", text: "Blueberry" ,color:'#42cef5' },
        { id: "3", text: "Pear" ,color:'#42cef5' },
        { id: "4", text: "Apple", correct: true  ,color:'#42cef5'}
      ]
    },
    {
      question: "What is localhost's IP address?",
      answers: [
        { id: "1", text: "192.168.1.1" ,color:'#42cef5' },
        { id: "2", text: "127.0.0.1", correct: true  ,color:'#42cef5'},
        { id: "3", text: "209.85.231.104"  ,color:'#42cef5'},
        { id: "4", text: "66.220.149.25" ,color:'#42cef5' }
      ]
    },
    {
      question: "What kind of fruit was used to name a computer in 1984?",
      answers: [
        { id: "1", text: "Blackberry" ,color:'#42cef5' },
        { id: "2", text: "Blueberry"  ,color:'#42cef5'},
        { id: "3", text: "Pear" ,color:'#42cef5' },
        { id: "4", text: "Apple", correct: true  ,color:'#42cef5'}
      ]
    }, {
      question: "What is localhost's IP address?",
      answers: [
        { id: "1", text: "192.168.1.1"  ,color:'#42cef5'},
        { id: "2", text: "127.0.0.1", correct: true ,color:'#42cef5' },
        { id: "3", text: "209.85.231.104" ,color:'#42cef5' },
        { id: "4", text: "66.220.149.25" ,color:'#42cef5' }
      ]
    },
    {
      question: "What kind of fruit was used to name a computer in 1984?",
      answers: [
        { id: "1", text: "Blackberry" ,color:'#42cef5' },
        { id: "2", text: "Blueberry" ,color:'#42cef5' },
        { id: "3", text: "Pear" ,color:'#42cef5' },
        { id: "4", text: "Apple", correct: true ,color:'#42cef5' }
      ]
    }, {
      question: "What is localhost's IP address?",
      answers: [
        { id: "1", text: "192.168.1.1"  ,color:'#42cef5'},
        { id: "2", text: "127.0.0.1", correct: true ,color:'#42cef5' },
        { id: "3", text: "209.85.231.104" ,color:'#42cef5' },
        { id: "4", text: "66.220.149.25" ,color:'#42cef5' }
      ]
    },
    {
      question: "What kind of fruit was used to name a computer in 1984?",
      answers: [
        { id: "1", text: "Blackberry" ,color:'#42cef5' },
        { id: "2", text: "Blueberry" ,color:'#42cef5' },
        { id: "3", text: "Pear"  ,color:'#42cef5'},
        { id: "4", text: "Apple", correct: true  ,color:'#42cef5'}
      ]
    }, {
      question: "What is localhost's IP address?",
      answers: [
        { id: "1", text: "192.168.1.1" ,color:'#42cef5' },
        { id: "2", text: "127.0.0.1", correct: true ,color:'#42cef5' },
        { id: "3", text: "209.85.231.104"  ,color:'#42cef5'},
        { id: "4", text: "66.220.149.25" ,color:'#42cef5' }
      ]
    },
    {
      question: "What kind of fruit was used to name a computer in 1984?",
      answers: [
        { id: "1", text: "Blackberry" ,color:'#42cef5' },
        { id: "2", text: "Blueberry" ,color:'#42cef5' },
        { id: "3", text: "Pear"  ,color:'#42cef5'},
        { id: "4", text: "Apple", correct: true ,color:'#42cef5' }
      ]
    }, {
      question: "What is localhost's IP address?",
      answers: [
        { id: "1", text: "192.168.1.1" ,color:'#42cef5' },
        { id: "2", text: "127.0.0.1", correct: true  ,color:'#42cef5'},
        { id: "3", text: "209.85.231.104" ,color:'#42cef5' },
        { id: "4", text: "66.220.149.25" ,color:'#42cef5' }
      ]
    },
    {
      question: "What kind of fruit was used to name a computer in 1984?",
      answers: [
        { id: "1", text: "Blackberry"  ,color:'#42cef5'},
        { id: "2", text: "Blueberry" ,color:'#42cef5' },
        { id: "3", text: "Pear" ,color:'#42cef5' },
        { id: "4", text: "Apple", correct: true ,color:'#42cef5' }
      ]
    }, {
      question: "What is localhost's IP address?",
      answers: [
        { id: "1", text: "192.168.1.1" ,color:'#42cef5' },
        { id: "2", text: "127.0.0.1", correct: true ,color:'#42cef5' },
        { id: "3", text: "209.85.231.104" ,color:'#42cef5' },
        { id: "4", text: "66.220.149.25" ,color:'#42cef5' }
      ]
    },
    {
      question: "What kind of fruit was used to name a computer in 1984?",
      answers: [
        { id: "1", text: "Blackberry" ,color:'#42cef5' },
        { id: "2", text: "Blueberry" ,color:'#42cef5' },
        { id: "3", text: "Pear" ,color:'#42cef5' },
        { id: "4", text: "Apple", correct: true  ,color:'#42cef5'}
      ]
    }
  ];
 

