const React = require("react-native");

const { StyleSheet, Dimensions, Platform } = React;

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

export default {
    grayColor: {
        color: '#787878'
    },
    darkGrayColor: {
        color: '#333'
    },
    srchBox: {
      shadowOffset:{ height: 0 },
      shadowColor: 'rgba(0,0,0,0.25)',
      shadowOpacity: 0.5,
      backgroundColor: '#fff',
      borderBottomWidth: 2,
      borderColor: '#f1f1f1'
    },
    inputStyle: {
        padding: 8,
        borderRadius: 30,
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.1)',
        width: deviceWidth - 60
    },
    srchBtn: {
        padding: 8,
        width: 50,
    },
    srchBtnTxt: {
        color: '#3381ff',
        textAlign: 'center'
    },
    feeds: {
        paddingTop: 15,
        paddingBottom: 10,
        shadowOffset:{ height: 1 },
        shadowColor: 'rgba(0,0,0,0.35)',
        shadowOpacity: 0.5,
        marginBottom: 10,
        backgroundColor: '#fff'
    },
    proImg: {
        width: 50,
        height: 50,
    },
    attchimg: {
        width: deviceWidth,
        height: 220
    },
    actions: {
        borderTopWidth: 1,
        borderColor: '#ddd',
        paddingTop: 10,
        justifyContent: 'space-around',
    },
    userProfile: {
        backgroundColor: '#fff',
        padding: 15,
        shadowOffset:{ height: 1 },
        shadowColor: 'rgba(0,0,0,0.35)',
        shadowOpacity: 0.5,
        position: 'relative'
    },
    userImage: {
        width: 80,
        height: 80,
    },
    username: {
        fontSize: 18,
        fontWeight: '500',
        textAlign: 'center',
    },
    prfsn: {
        color: '#787878',
        fontSize: 17,
        textAlign: 'center',
        marginBottom: 10,
        minHeight: 43,
    },
    connectBtn: {
        borderWidth: 1,
        borderRadius: 3,
        borderColor: '#3381ff',
        padding: 5
    },
    connectBtnTxt: {
        color: '#3381ff',
        fontWeight: 'bold',
        fontSize: 18,
        fontFamily: 'arial',
        textAlign: 'center'
    },
    mutualImage: {
        width: 30,
        height: 30,
        marginRight: 10,
    },
    mutualTxt: {
        color: '#787878',
    },
    footer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        padding: 10,
        backgroundColor: '#fff',
        borderTopWidth: 1,
        borderColor: '#ddd',
        justifyContent: 'space-around'

    },
    footerIcon: {
        fontSize: 24
    }
};