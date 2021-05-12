import { StyleSheet } from 'react-native';
export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white'
    },
    second:{
        padding:10,
        flex:1,
        alignItems:'center',
        justifyContent:'center'
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
    home:{
        color:'white',
        fontSize:17,
        fontFamily:'Poppins-Bold'
    },
    card:{
        width:'60%',
        height:50,
        backgroundColor:'red',
        justifyContent:'center',
        alignItems:'center'
    },
    text:{
        color:'white',
        fontFamily:'Poppins-SemiBold',
        fontSize:16
    }
})