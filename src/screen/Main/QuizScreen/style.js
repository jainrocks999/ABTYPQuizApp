import { StyleSheet } from 'react-native';


export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 0
      },
      text: {
        color: "red",
        fontSize: 16,
        letterSpacing: -0.02,
        fontWeight: "300"
      },
      safearea: {
        
      },
      button:{
        marginTop:40,
        backgroundColor:'#42cef5',
        paddingVertical:13,
        paddingHorizontal:25,
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center',
        
      },
      container1:{
       
      },
      view:{
        width:'100%',
        padding:10
      },
      view1:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    main:{
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
    button1:{
      backgroundColor:'#02e7f7',
      width:'100%',
      height:45,
      borderRadius:10,
      alignItems:'center',
      justifyContent:'center',
      marginVertical:6,
      //borderWidth:1,
     // borderColor:'red'
    }

})