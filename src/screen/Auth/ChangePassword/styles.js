import { StyleSheet } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';
export default StyleSheet.create({
    inputContainerStyle: {
        height: 50,
        borderRadius: hp('1%'),
        backgroundColor: '#ffffff',
        borderWidth:1
    },
    inputStyle: {
        fontSize: 14, 
        marginLeft: 10
    },
    container:{
        flex:1,
    },
    back:{
        width:25,
        height:30
    },
    main:{
        justifyContent:'center',
        flex:1,
        paddingHorizontal:10
    },
    main2:{
        paddingHorizontal:15,
        marginBottom:10
    },
    forgot:{
        fontSize:16,
        fontWeight:'700'
    },
    change:{
        alignItems:'center',
        marginTop:30
    },
    main1:{
        width:'100%',
         backgroundColor:'red',
         height:45,
         alignItems:'center',
         justifyContent:'space-between',
         paddingHorizontal:10,
         flexDirection:'row'
   },
   image:{
       width:30,
       height:30,
       tintColor:'white'
   },
   title:{
       color:'white',
       fontSize:17,
       fontFamily:'Poppins-Bold'
   },
   second:{
    paddingHorizontal:20,
    marginTop:30,
    flex:1
   },
   view:{
    justifyContent:'flex-start',
    width:'100%'
},
logo:{width:'100%',alignItems:'center',marginTop:20}
})