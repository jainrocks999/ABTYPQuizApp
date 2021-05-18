import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    drawerContent: {
        flex: 1,
    },
    title: {
        fontFamily:'Krdev016',
        fontSize:16,
        width:'80%',
        color:'#000'
    },
    caption: {
        fontSize: 14,
        fontFamily:'Krdev016',
        color:'#000'
    },
    drawers: {
        borderBottomWidth: 1,
        borderBottomColor: '#b6b8b6',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical:20
    },
    drawer: {
        borderBottomWidth: 1,
        borderBottomColor: '#b6b8b6',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 14, 
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    iconView: {
        width: 25,
        height: 25,
        backgroundColor: 'grey'
    },
    text: {
        marginLeft: 10,
        fontFamily:'KRDEV011.ttf',
        fontSize:16
    },
    icon: {
        width: 20,
        height: 20
    },
    profile: {
        marginLeft: 20,
        justifyContent: 'center'
    },
    bottom:{ 
        alignItems: 'center', 
        paddingVertical: 25, 
        backgroundColor: '#53b175' 
    },
    stop:{ 
        alignItems: 'center', 
        paddingVertical: 20
    },
    text1:{ 
        color: 'white', 
        fontSize: 16 ,
        fontFamily:'Krdev016'
    },
    image:{ 
        height: 30, 
        width: 30 
    },
    imageicon:{
        width:'100%',
        height:'100%'
    }
})