import { StyleSheet } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';
export default StyleSheet.create({
    container:{
        flex:1,
       // backgroundColor:'#fff'
    },
    main1:{
        width:'100%',
        backgroundColor:'red',
        height:45,
        justifyContent:'center',
        paddingHorizontal:10,
   },
   second:{
       padding:20,
       marginTop:0,
       justifyContent:'center',
       alignItems:'center'
   },
   imageCont:{
       width:'100%',
       alignItems:'center',
       marginTop:5
    },
    image1:{
        width:110,
        height:140,
        marginTop:20
    },
    button:{
        width:'100%',
        marginTop:27,
        flexDirection:'row',
        justifyContent:'space-between',
    },
    quiz:{
        fontSize:20,
        color:'white',
        fontWeight:'700',
        letterSpacing:2
    },
    cong:{
        color:'#FFF',
        fontWeight:'700',
        fontSize:35,
        letterSpacing:2
    },
    same:{
        color:'white',
        fontSize:16
    },
    score:{
        color:'white',
        marginTop:15,
        fontWeight:'700',
        letterSpacing:3,
        fontSize:18
    },
    title:{
        flexDirection:'row',
        alignItems:'center',
        marginTop:10
    },
    correct:{
        color:'red',
        fontWeight:'bold',
        fontSize:20,
        letterSpacing:2
    },
    wrong:{
        color:'white',
        fontWeight:'bold',
        fontSize:20,
        letterSpacing:2
    },
    coins:{
        color:'white',
        marginTop:15,
        fontSize:18,
        letterSpacing:3
    },
    view:{
        flexDirection:'row',
        alignItems:'center',
        marginTop:10
    },
    five:{
        color:'white',
        marginLeft:10,
        fontSize:20,
        fontWeight:'700'
    },
    x:{
        marginTop:20,
        borderRadius:28,
        width:56,
        height:56,
        backgroundColor:'#b0adac',
        justifyContent:'center',
        alignItems:'center'
    },
    main: { 
        width: "100%",
        height:40,
        backgroundColor: 'red',
        justifyContent: "center",
        alignItems: "center",
        borderRadius:8
    },
    take:{
        alignSelf: "center",
        color: 'white',
        fontFamily:'Krdev016',
        fontSize: 14,
    },
    text1:{
        color:'white',
        fontSize:30,marginBottom:7}
   
})