import { StyleSheet } from 'react-native';


export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white'
    },
    second:{
     // height:'100%'
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
    leader:{
        color:'white',
        fontSize:17,
        fontFamily:'Poppins-Bold'
    },
    card:{shadowColor:'black',
        shadowOpacity:0.25,
        shadowRadius:4,
        shadowOffset:{height:2,width:0},
        elevation:5,
        borderRadius:10,
        backgroundColor:'white',
        //height:60,
        marginTop:10,
        padding:10,
        marginHorizontal:10,
        marginBottom:2
    },
    main1:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    name:{
        fontFamily:'Poppins-Medium',
        color:'red'
    },
    time:{
        fontFamily:'Poppins-Medium',
        fontSize:13,
        color:'red'
    },
    score:{
        fontFamily:'Poppins-Medium',
        color:'red'
    },
    bottom:{
        bottom:0,
        right:0,
        left:0,
        position:'absolute'
    }
})