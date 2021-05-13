import { StyleSheet ,Dimensions} from 'react-native';


export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white'
    },
    second:{
       
        flex:1
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
        width:35,
        height:30,
        tintColor:'white'
    },
    book:{
        color:'white',
        fontSize:17,
        fontFamily:'Poppins-Bold'
    },
    pdf: {
        flex:1,
        width:Dimensions.get('window').width,
        height:'100%'
    },
    main1:{
        justifyContent:'center',
        alignItems:'center',
        flex:1
    }
})