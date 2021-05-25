import { StyleSheet } from 'react-native';


export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
    },
    second:{
        padding:20,
        marginTop:100
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
        fontFamily:'KRDEV011'
    },
    imageContainer:{
        alignItems:'center',
        marginTop:20
    },
    titleCont:{
        justifyContent:'flex-start',
        width:'100%',
        marginTop:5
    },
    button:{
        width:'100%',
        marginTop:30,
        marginBottom:50
    }
})