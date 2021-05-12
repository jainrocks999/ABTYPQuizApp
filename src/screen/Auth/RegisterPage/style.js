import { StyleSheet } from 'react-native';


export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white'
    },
    second:{
        padding:20,
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    view:{
        width:'100%',
        justifyContent:'flex-start'
    },
    view1:{
        width:'100%',
        justifyContent:'flex-start',
        marginTop:5
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
    drop:{
        width:'100%',
        height:45,
        borderWidth:1,
        justifyContent:'center',
        paddingHorizontal:8,
        borderRadius:10
    }
   
})