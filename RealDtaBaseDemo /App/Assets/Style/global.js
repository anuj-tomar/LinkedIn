const React = require("react-native");

const { StyleSheet, Dimensions, Platform } = React;

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

export default {
  FMT : {
    fontFamily: Platform.OS === 'ios' ? "HelveticaNeue-Medium" : "Myanmar-Text",
  },
  FHNL : {
    fontFamily: "HelveticaNeue-Light",
  },
  FHNM : {
    
  },
  FHNR : {
    fontFamily: "HelveticaNeue-Roman",
  },
  FHNB : {
    fontFamily: "HelveticaNeueBold",
  },

  Fbold : {
    fontWeight: 'bold'
  },

  

  trianglebottom: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 4,
    borderRightWidth: 4,
    borderTopWidth: 4,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderTopColor: '#ffffff'
  },


  errorMsg : {
    color : 'red',
    fontSize : 9,
    
    paddingTop : 1
  },

  BT0 : {
    borderTopWidth : 0
  },
  BB0 : {
    borderBottomWidth : 0
  },

  
  pt2 : {
    paddingTop : 2
  },

  pt3 : {
    paddingTop : 3
  },

  loader : {
    flex: 1,
    justifyContent: 'center'
  },

  /*colors*/
  
  colorWhite : {
    color : '#ffffff'
  },
  colorRed : {
    color : '#d01d15'
  },
  colorRed1 : {
    color : '#d01d15'
  },
  colorBlack : {
    color : '#000000'
  },
  colorGray : {
    color : '#6e6e6e'
  },
  colorGray1 : {
    color : '#959595'
  },
  colorGray2 : {
    color: '#888888'
  },
  colorGreen : {
    color : 'green'
  },

  /* paddind*/
  pt0 : {
    paddingTop: 0
  },
  p10 : {
    padding : 10
  },
  p7 : {
    padding : 7
  },
  p15 : {
    padding : 15
  },
  
  pt5 : {
    paddingTop : 5
  },
  pt7 : {
    paddingTop : 7
  },
  pt10 : {
    paddingTop : 10
  },
  pt15 : {
    paddingTop : 15
  },
  pt20 : {
    paddingTop : 20
  },

  p5 : {
    padding : 5
  },

  brr20 : {
    borderRadius : 20
  },
  pb0 : {
    paddingBottom : 0
  },
  pb10 : {
    paddingBottom : 10
  },
  pl2 : {
    paddingLeft : 2
  },
  pl5 : {
    paddingLeft : 5
  },
  pl10 : {
    paddingLeft : 10
  },

  pr0 : {
    paddingRight : 0
  },
  pr2 : {
    paddingRight : 2
  },
  pr5 : {
    paddingRight : 5
  },
  pr10 : {
    paddingRight : 10
  },
  pr15 : {
    paddingRight : 15
  },
  pb2 : {
    paddingBottom : 2
  },
  pb5 : {
    paddingBottom : 5
  },
  pb15 : {
    paddingBottom : 15
  },
  pb20 : {
    paddingBottom : 20
  },

  m0 : {
    margin : 0
  },

  /*Margin Left*/
  ml2 : {
    marginLeft : 2
  },
  ml5 : {
    marginLeft : 5
  },
  ml10 : {
    marginLeft : 10
  },
  ml15 : {
    marginLeft : 15
  },

  /*Margin Right*/
  mr2 : {
    marginRight : 2
  },
  mr5 : {
    marginRight : 5
  },
  mr10 : {
    marginRight : 10
  },
  mr15 : {
    marginRight : 15
  },

  /*margin Top*/
  mt0 : {
    marginTop : 0
  },
  mt1 : {
    marginTop : 1
  },
  mt2 : {
    marginTop : 2
  },
  mt5 : {
    marginTop : 5
  },
  mt10 : {
    marginTop : 10
  },
  mt15 : {
    marginTop : 15
  },
  mt20 : {
    marginTop : 20
  },
  mt45 : {
    marginTop : 45
  },
  mt75 : {
    marginTop : 75
  },

  

  mb5 : {
    marginBottom : 5
  },
  mb10 : {
    marginBottom : 10
  },

  bw0 : {
    borderWidth : 0
  },
  bgr1 : {
    borderRightWidth : 1,
    borderRightColor : '#ced4da'
  },

  txtCenter: {
    textAlign: 'center',
  },
  txtRight: {
    textAlign: 'right',
  },
  txtLeft:{
    textAlign: 'left',
  },

  bgBlack : {
    backgroundColor : '#000000'
  },
  bgBlack08 : {
    backgroundColor: 'rgba(0, 0, 0, 0.8)'
  },
  bggray : {
    backgroundColor : '#202020'
  },
  bggray1 : {
    backgroundColor : '#6c757d'
  },
  bggray2 : {
    backgroundColor : '#323232'
  },
  bggray3 : {
    backgroundColor : '#dcdddf'
  },
  bgWhite : {
    backgroundColor : '#ffffff'
  },
  bgRed : {
    backgroundColor : '#d01d15'
  },

  mh100 : {
    minHeight : '100%'
  },
  mh100px : {
    minHeight : deviceHeight - 55
  },

  /**Button**/
  btnline: {
    backgroundColor: '#d01d15',
    color: '#ffffff',
    textAlign: 'center',
    fontSize: 9,
    minHeight: 26,
    padding: 6,
    paddingLeft: 10,
    paddingRight: 10,
    
    borderWidth: 1,
    borderColor: '#d01d15'
  },
  btnWhiteline: {
    //backgroundColor: '#d01d15',
    color: '#ffffff',
    textAlign: 'center',
    fontSize: 9,
    minHeight: 26,
    padding: 6,
    paddingLeft: 10,
    paddingRight: 10,
    
    borderWidth: 1,
    borderColor: '#ffffff'
  },
  btnWhiteActive:{
    backgroundColor: '#ffffff',
    color: '#000000',
  },
  btnlineActive: {
    backgroundColor: '#ffffff',
    color: '#d01d15',
    textAlign: 'center',
    fontSize: 9,
    minHeight: 26,
    padding: 6,
    paddingLeft: 10,
    paddingRight: 10,
    
    borderWidth: 1,
    borderColor: '#d01d15'
  },
  btn: {
    backgroundColor: '#d01d15',
    color: '#ffffff',
    textAlign: 'center',
    fontSize: 9,
    minHeight: 26,
    padding: 6,
    paddingLeft: 10,
    paddingRight: 10,
    
  },
  btnL: {
    backgroundColor: '#d01d15',
    color: '#ffffff',
    textAlign: 'center',
    fontSize: 14,
    minHeight: 44,
    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft: 10,
    paddingRight: 10,
    
  },

  w100p : {
    width : '100%'
  },
  w250 : {
    width : 250
  },
  w20 : {
    width : 20
  },
  w30 : {
    width : 30
  },
  w50 : {
    width : 50
  },
  w60 : {
    width : 60
  },
  w80 : {
    width : 80
  },
  w100 : {
    width : 100
  },


  tags : {
    backgroundColor: '#f0f0f0',
    padding : 3,
    color: '#6e6e6e',
    
    fontSize: 9
  },

  /*Input*/
  shareStyle: {
    borderWidth: 1,
    borderColor: '#ced4da',
  },
  bwr1 : {
    borderRightWidth: 1,
    borderRightColor: '#ced4da',
  },
  inputWhite: {
    borderWidth: 1,
    borderColor: '#ced4da',
    backgroundColor:"#ffffff",
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 3,
    paddingBottom: 3,
    margin: 0,
    height: 26,
    width: '100%',
    fontSize: 9,
    
  },
  inputWhiteA: {
    borderWidth: 1,
    borderColor: '#ced4da',
    backgroundColor:"#ffffff",
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 3,
    paddingBottom: 3,
    margin: 0,
    height: 26,
    fontSize: 9,
  },
  inputWhiteA1: {
    borderWidth: 1,
    borderColor: '#ced4da',
    backgroundColor:"#ffffff",
    paddingLeft: 5,
    paddingRight: 5,
    margin: 0,
    height: 26,
  },
  inputWhiteA2: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 3,
    paddingBottom: 3,
    backgroundColor:"#ffffff",
    height: 26,
    fontSize: 9,
  },
  inputGray: {
    borderWidth: 0,
    backgroundColor:"#202020",
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 3,
    paddingBottom: 3,
    margin: 0,
    height: 26,
    width: '100%',
    color : '#6e6e6e',
    fontSize: 9,
  },
  inputGrayLogin: {
    borderWidth: 0,
    backgroundColor:"#202020",
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 10,
    margin: 0,
    height: 44,
    width: '100%',
    color : '#6e6e6e',
    fontSize: 14,
  },
  whiteSelect: {
    height: 26,
    backgroundColor : '#ffffff',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 3,
    paddingBottom: 3,
    borderColor: '#c2c2c2',
    borderWidth: 1
  },
  txtwhiteSelect : {
    fontSize: 9,
  },
  graySelect: {
    height: 26,
    backgroundColor : '#202020',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 3,
    paddingBottom: 3,
  },
  graytextareaStyle: {
    padding: 8,
    margin: 0,
    textAlignVertical: 'top',
    width: '100%',
    fontSize: 9,
    backgroundColor: '#202020',
    color : '#6e6e6e',
  },
  textareaStyle: {
    borderWidth: 1,
    borderColor: '#ced4da',
    padding: 8,
    margin: 0,
    textAlignVertical: 'top',
    width: '100%',
    fontSize: 9
  },
  labeltext : {
    fontSize: 9,
    marginLeft: 5,
    color: '#000000'
  },
  labeltextwhite : {
    fontSize: 9,
    paddingBottom: 5,
    color: '#ffffff',
    minHeight: 17
  },

  fs9 : {
    fontSize : 9
  },
  fs10 : {
    fontSize : 10
  },
  fs11 : {
    fontSize : 11
  },
  fs12 : {
    fontSize : 12
  },
  fs13 : {
    fontSize : 13
  },
  fs14 : {
    fontSize : 14
  },
  fs15 : {
    fontSize : 15
  },
  fs16 : {
    fontSize : 17
  },
  fs18 : {
    fontSize : 18
  },
  fs20 : {
    fontSize : 20
  },
  fs24 : {
    fontSize : 24
  },
  fs28 : {
    fontSize : 28
  },
  fs7 : {
    fontSize : 7
  },
  borderTopgray : {
    borderTopColor : '#696969',
  },

  title1 : {
    backgroundColor : '#333333',
    paddingTop: 6,
    paddingBottom : 7,
    color : '#ffffff',
    fontSize : 12,
    fontWeight : 'bold',
    textAlign : 'center',
    letterSpacing : 4
  },

  projectCallout : {
    width: 140,
    paddingRight: 10
  },

  textunderline : {
    textDecorationLine : 'underline'
  },

  o5: {
    opacity: 0.1
  },

  close : {
    width: 20,
    height: 20
  },
  dt : {
    borderLeftWidth : 1,
    borderRightWidth : 1,
    borderLeftColor : '#d01d15',
    borderRightColor : '#d01d15',
    padding :  10
  },
  listView: {
    flex: 1,
    marginTop: 20,
  },
  lineSeorator:{
    flex: 1,
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#8E8E8E',
  },
  progress: {
    height : 4
  },
  w90p : {
    width : '90%'
  },
  w86p : {
    width : '86%'
  },

  addPhotoFrame : {
    borderWidth : 1,
    borderColor : '#cccccc',
    width: 200
  },
  b1 : {
    borderWidth : 1,
    borderColor : '#cccccc',
  },
  bl1 : {
    borderLeftWidth : 1,
    borderLeftColor : '#cccccc',
  },
  br1 : {
    borderRightWidth : 1,
    borderRightColor : '#cccccc',
  },
  bb1 : {
    borderBottomWidth : 1,
    borderBottomColor : '#cccccc',
  },
  bt1 : {
    borderTopWidth : 1,
    borderTopColor : '#3e3e3e',
  },
  addPhotoTxt: {
    fontSize : 80,
    color: '#d01d15',
    textAlign: 'center',
    paddingTop: 15,
    paddingBottom: 15
  },
  addPhotoLine : {
    fontSize : 10,
    textAlign: 'center',
    borderTopWidth : 1,
    borderTopColor : '#cccccc',
    paddingTop: 5,
    paddingBottom: 5
  },
  iconstyle1: {
    backgroundColor : '#b2b2b2',
    width: 48,
    height: 24,
    flexWrap : 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  
  bgfbLink : {
    backgroundColor : '#3b5998',
  },
  bgtwLink : {
    backgroundColor : '#55acee',
  },
  bginsta : {
    backgroundColor : '#3f729b',
  },
  bggoogle : {
    backgroundColor : '#dd4b39',
  },
  bgwikiLink : {
    backgroundColor : '#2795e9',
  },
  bgyoutube : {
    backgroundColor : '#c62d1d',
  },
};
