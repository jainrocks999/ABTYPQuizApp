import React from "react";
import { View,Text, SafeAreaView, Alert,Image, ScrollView,TouchableOpacity} from "react-native";
import { Button, ButtonContainer } from "../../../component/quizComponent/Button";
import  {Popup}  from "../../../component/quizComponent/Popup";
import BottomTab from '../../../component/StoreButtomTab';
import styles from './style';
import StatusBar from '../../../component/StatusBar';
import Header from "../../../component/header";
import { connect } from 'react-redux';
import ProgressCircle from 'react-native-progress-circle'

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
      timer: null,
      counter: 100,
      id: this.props.route.params.id,
      roundname:this.props.route.params.roundname,
      questionList:[],
     
    };
    this.apiCall()
  }
  apiCall=()=>{
    this.props.dispatch({
      type:'GetQuiz_List_Request',
      url:'getquestion_quizbyid',
      quiz_id:this.state.id
    })
  }
  componentDidMount() {
   // this.apiCall()
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
        if (correct) {
          nextState.correctCount = state.correctCount + 1;
          nextState.answerCorrect = true;
        } else {
          nextState.answerCorrect = false;
        }
        return nextState;
      },
      () => {
        setTimeout(() => this.nextQuestion(), 500);
      }
    );
  }
  else{
    this.setState(
      state => {
        const nextState = { answered: true };
        state.disable=true;
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
       ()=>{setTimeout(()=>this.next(),500)}
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
      //  this.alertFunction()
      this.props.navigation.navigate('Summery',{
        correctCount:this.state.correctCount,
        totalQuestion:list.length
      }
      )
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
  console.log('list data is here',list)
    return (
     <View style={{flex:1}}>
      <View style={{flex:1}}>
          <Header
          title='Quiz Screen'
          />
        <ScrollView>
        <View style={styles.view}>
          <View style={styles.view1}>
              <Text style={[styles.text]}>
              {`Question ${this.state.index+1} of ${list.length}`} </Text>
            
              <View style={{backgroundColor:'green',paddingHorizontal:10,paddingVertical:4,justifyContent:'center',alignItems:'center'}}>
                <Text style={{color:'white'}}>{this.state.roundname}</Text>
              </View>
          </View>
          <View style={{alignItems:'center',justifyContent:'center',margin:10}}>
          {/* <Text style={[styles.text]}>
              {`Timer : ${this.state.counter}`}</Text> */}
              <ProgressCircle
                percent={this.state.counter}
                radius={50}
                borderWidth={8}
                color="#3399FF"
                shadowColor="#999"
                bgColor="#fff"
            >
            <Text style={{ fontSize: 18 }}>{this.state.counter}</Text>
        </ProgressCircle>
          </View>
          <View style={{marginTop:10,justifyContent:'center',alignItems:'center',padding:5,backgroundColor:'red'}}>
           <Text style={{fontSize:18,color:'white'}}>{list[this.state.index].question}</Text>
          </View>
         </View>
          <SafeAreaView style={{paddingHorizontal:10,marginTop:'10%',justifyContent:'center',alignItems:'center'}}>
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

 

