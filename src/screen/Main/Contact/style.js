import { StyleSheet } from 'react-native';
export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    second: {
        padding: 10,
        flex: 1
    },
    main: {
        width: '100%',
        backgroundColor: 'red',
        height: 45,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        flexDirection: 'row'
    },
    image: {
        width: 35,
        height: 30,
        tintColor: 'white'
    },
    contact: {
        color: 'white',
        fontSize: 17,
        fontFamily: 'Poppins-Bold'
    },
    main1: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    view: {
        flexDirection: 'row',
        marginTop: 10
    },
    text: {
        fontFamily: 'Poppins-Medium',
        marginLeft: 6
    },
    card: {
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowRadius: 8,
        shadowOffset: { height: 2, width: 0 },
        elevation: 5,
        borderRadius: 10,
        backgroundColor: 'white',
        //  height:300,
        margin: 20,
        padding: 10
    }
})