const React = require("react-native");

const { StyleSheet, Dimensions, Platform } = React;

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

export default {

  row: {
    flex: 1,
    flexDirection: 'row',
    width: '100%',
  },
  rowdir: {
    flexDirection: 'row',
    width: '100%',
  },
  flexwrap : {
    flexWrap : 'wrap'
  },
  flex1 : {
    flex: 1
  },
  flexdir: {
    flexDirection: 'row'
  },
  col: {
    flexGrow: 1,
    flexBasis: 0,
  },
  firstcol: {
    paddingRight: 5,
  },
  lastcol: {
    paddingLeft: 5,
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
  alignItems: {
    alignItems: 'center',
  },
  alignItemsTop: {
    alignItems: 'flex-start',
  },
  justifyContent: {
    justifyContent: 'space-between',
  },
  justifyContentCenter: {
    justifyContent: 'center',
  },
  justifyContentRight: {
    justifyContent: 'flex-end',
  },
  txtLine : {
    textDecorationLine: 'underline'
  },
  textUppercase : {
    textTransform: 'uppercase'
  },
  textItalic: {
    fontStyle: 'italic'
  },
  linestyle:{
    color: '#d01d15',
  },
  fs10: {
    fontSize: 10,
  },
  h40: {
    height:40
  },
  h15:{
    height: 15
  },
  w15:{
    width: 15
  },
  fs11: {
    fontSize: 11,
  },
  fs12: {
    fontSize: 12,
  },
  fs14: {
    fontSize: 14,
  },
  fs16: {
    fontSize: 16,
  },
  fs18: {
    fontSize: 18,
  },
  fs24: {
    fontSize: 24,
  },
  
  colorWhite: {
    color: '#fff',
  },
  colorGreen: {
    color: '#37941e',
  },
  colorRedshade:{
    color: '#d01d15',
  },
  colorgrayshade:{
    color: '#495057'
  },
  colorblack:{
    color: '#000000'
  },

  req: {
    color: 'red',
  },

  fontBold : {
    fontWeight: 'bold'
  },
  fsw : {
    fontWeight: '500'
  },
  bgRed: {
    backgroundColor: '#d01d15',
  },
  bggray: {
    backgroundColor: '#00000066'
  },
  bggray1: {
    backgroundColor: '#eeeeee'
  },
  bggray1: {
    backgroundColor: '#0000000d'
  },
  bgwhite: {
    backgroundColor: '#ffffff'
  },
  bggreen: {
    backgroundColor: '#37941e'
  },
  height100 : {
    height: '100%'
  },
  borderblack: {
    borderWidth: 1,
    borderColor: '#ced4da'
  },
  height90 : {
    maxHeight: '90%'
  },
  p0: {
    padding: 0,
  },
  p5: {
    padding: 5,
  },
  p7: {
    padding: 7,
  },
  p10: {
    padding: 10,
  },
  p15: {
    padding: 15,
  },
  pt3: {
    paddingTop: 2,
  },
  pt7: {
    paddingTop: 7,
  },
  pt5: {
    paddingTop: 5,
  },
  pt15: {
    paddingTop: 15,
  },
  pb3: {
    paddingBottom: 3,
  },
  pb15: {
    paddingBottom: 15,
  },
  pb2: {
    paddingBottom: 2,
  },
  pb7: {
    paddingBottom: 7,
  },
  pt10: {
    paddingTop: 10,
  },
  pt20: {
    paddingTop: 20,
  },
  pb0: {
    paddingBottom: 0,
  },
  pb5: {
    paddingBottom: 5,
  },
  pb10: {
    paddingBottom: 10,
  },
  pb20: {
    paddingBottom: 20,
  },
  pb40: {
    paddingBottom: 40,
  },
  pr5: {
    paddingRight: 5,
  },
  pr10: {
    paddingRight: 10,
  },
  pl5 : {
    paddingLeft: 5,
  },
  pl10: {
    paddingLeft: 10,
  },
  mt1: {
    marginTop: 1
  },
  mt5: {
    marginTop: 5
  },
  mr1: {
    marginRight: 1
  },
  mt10: {
    marginTop: 10
  },
  mt15: {
    marginTop: 15
  },
  mt20: {
    marginTop: 20
  },
  mt30: {
    marginTop: 30
  },
  mt100: {
    marginTop: 150
  },
  mt40: {
    marginTop: 40
  },

  mr3: {
    marginRight: 3
  },
  mr5: {
    marginRight: 5
  },
  mr10: {
    marginRight: 10
  },
  mr20: {
    marginRight: 20
  },
  mb5: {
    marginBottom: 5
  },
  mb6: {
    marginBottom: 6
  },
  mb3: {
    marginBottom: 3
  },
  ml10: {
    marginLeft: 10
  },
  mb30: {
    marginBottom: 30
  },
  mb40: {
    marginBottom: 40
  },
  ml3:{
    marginLeft: 3
  },
  ml20: {
    marginLeft: 20
  },


  w70:{
    width: 70
  },
  w20:{
    width: 20
  },
  w40:{
    width: 40
  },
  w50:{
    width: 50
  },
  w0:{
    width: 0
  },
  w70:{
    width: 70
  },
  w250: {
    width: 250
  },
  w100: {
    width: 100
  },
  w80: {
    width: 80
  },
  w50: {
    width: 50
  },
  w150: {
    width: 150
  },
  w130: {
    width: 130
  },
  w200: {
    width: 200
  },
  w100per: {
    width: '100%'
  },
  w70per: {
    width: '70%'
  },
  w80per: {
    width: '80%'
  },

  mb10: {
    marginBottom: 10,
  },
  mb15: {
    marginBottom: 15
  },
  mb20: {
    marginBottom: 20
  },

  ml5: {
    marginLeft: 5
  },

  br0 : {
    borderRightWidth: 0
  },
  

  zi0 : {
    zIndex: 0
  },
  zi1 : {
    zIndex: 1
  },


  mlr5: {
    marginRight: 5,
    marginLeft: 5
  },

  error_msg: {
    color: 'red',
    fontSize: 12,
  },

  headerView: { 
    position: 'relative',
  },
  logoview: { 
		position: 'absolute',
		top: 16,
    right: 9,
  },
  menu:{
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 10  
  },
  back:{
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 7  
  },
  imageStyle: {
    width: 20, 
    height: 20,
  },
  brandlogo: { 
    color:'#d01d15', 
    fontSize: 16,
    height: 19
  },
  brandsubtxt: { 
    fontSize: 8,
    color: '#9e9e9e'
  },

  txtnatureofservice: {
    borderBottomColor: '#0000000d',
    borderBottomWidth: 1,
    paddingBottom: 15,
    marginBottom: 15
  },

  styleSelect: {
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#000000'
  },

  subtitleselect: {
    backgroundColor: '#d01d15',
    paddingLeft: 10,
    paddingRight: 10
  },
  subtitlestylePicker: {
    height: 32,
    color: '#ffffff'
  },

  styleSelectCon: {
    color: '#000000',
    fontSize: 10,
    padding: 0,
  },
  subtitle: {
    backgroundColor: '#d01d15',
    padding: 10,
    flexDirection: 'row'
  },
  ysubtitle: {
    backgroundColor: '#ffc107',
    padding: 10,
    flexDirection: 'row'
  },

  subtitleselectstyle: {
    backgroundColor: '#d01d15',
    paddingTop: 9,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 9,
    flexDirection: 'row'
  },

  container: {
    backgroundColor: '#ffffff',
    paddingTop: (Platform.OS === 'ios') ? 20 : 0, //this is just to test if the platform is iOS to give it a height of 20, else, no height (Android apps have their own status bar)
    flex: 1
  },

  selectmodelspace: {
    padding: 10,
    paddingTop: (Platform.OS === 'ios') ? 30 : 10,
  },

  stylePickerCustom: {
    borderWidth: 1,
    borderColor: '#ced4da',
    height: 32
  },
  stylePicker: {
    borderWidth: 1,
    borderColor: '#ced4da',
    height: 32
  },
  selectpicker: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flex: 1
  },
  inputStyle: {
    borderWidth: 1,
    borderColor: '#ced4da',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 3,
    paddingBottom: 3,
    margin: 0,
    height: 32,
    width: '100%'
  },
  inputStyleWhite: {
    borderWidth: 1,
    borderColor: '#ced4da',
    backgroundColor:"#ffffff",
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 3,
    paddingBottom: 3,
    margin: 0,
    height: 32,
    width: '100%'
  },

  inputtextStyle: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#ced4da',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 3,
    paddingBottom: 3,
    margin: 0,
    height: 32,
    width: '100%',
    //fontFamily: (Platform.OS === 'ios') ? "OpenSans-Light" : "OpenSans-Regular",
    fontSize: 14
  },
  inputtextStyle1: {
    borderWidth: 1,
    borderColor: '#ced4da',
    paddingLeft: 10,
    paddingRight: 7,
    height: 32,
    width: '100%'
  },
  textareaStyle: {
    borderWidth: 1,
    borderColor: '#ced4da',
    padding: 8,
    margin: 0,
    textAlignVertical: 'top',
    width: '100%',
    //fontFamily: (Platform.OS === 'ios') ? "OpenSans-Light" : "OpenSans-Regular",
    fontSize: 12
  },

  inputrowtextStyle: {
    paddingBottom: 5,
    //fontFamily: (Platform.OS === 'ios') ? "OpenSans-Light" : "OpenSans-Regular",
    fontSize: 12
  },

  datePicker: {
    borderWidth: 1,
    flex: 1,
    borderColor: '#ced4da',
    height: 32,
    width: '100%',
    maxWidth: 400
  },
  datePickerHeight: {
    flex: null,
  },
  link: {
    color: '#ffffff',
    fontSize: 11
  },
  btn: {
    backgroundColor: '#d01d16',
    color: '#ffffff',
    textAlign: 'center',
    fontSize: 12,
    minHeight: 28,
    padding: 7,
    //fontFamily: (Platform.OS === 'ios') ? "OpenSans-Light" : "OpenSans-Regular"
  },
  btnl: {
    minHeight: 32,
    padding: 8,
  },
  subbut: {
    borderWidth: 1,
    borderColor: '#37941e',
    width: 20,
    height: 20,
    textAlign: 'center',
    color: '#37941e',
    fontSize: 20,
    lineHeight: 17,
    marginLeft: 10,
    fontFamily: "OpenSans-Bold"
  },
  disabled:{
    opacity: 0.8
  },
  o7:{
    opacity: 0.7
  },
  grayBtn: {
    backgroundColor: '#787878'
  },
  greenBtn: {
    backgroundColor: '#37941e'
  },
  whiteBtn: {
    backgroundColor: '#ffffff',
    color: '#495057',
    borderWidth: 1,
    borderColor: '#ced4da',
    fontSize: 12
  },
  whiteBtnwidthFont: {
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#ced4da',
  },
  btnselect: {
    textAlign: 'left'
  },

  uploadlogo : {
    width: 200,
    height: 200,
    borderWidth: 1,
    borderColor: '#727272',
  },
  expensesuploadlogo: {
    height: 60,
    borderWidth: 1,
    borderColor: '#727272',
    width: '100%',
  },

  uploadbill : {
    width: deviceWidth - 20,
    height: 200,
    borderWidth: 1,
    borderColor: '#727272',
  },

  uploadbillWidth : {
    width: 150,
    height: 240,
    borderWidth: 1,
    borderColor: '#727272',
  },

  TABorder: {
    borderBottomWidth: 1,
    borderBottomColor: '#ced4da',
    paddingBottom: 20,
    marginBottom: 20
  },

  SubTextBorder: {
    borderBottomWidth: 1,
    borderBottomColor: '#ced4da',
    paddingBottom: 7,
    marginBottom: 20
  },

  countryname:{
    width: '90%'
  },

  arrowright: {
    width: 10,
    height: 10
  },

  linesignup: {
    borderBottomWidth: 1,
    borderBottomColor: '#d01d15',
    marginTop: 10,
    marginBottom: 20
  },

  photoframe: {
    backgroundColor: '#0000001a'
  },
  photoframetxt:{
    paddingTop: 120,
    paddingBottom: 120,
    fontFamily: (Platform.OS === 'ios') ? "OpenSans-Light" : "OpenSans-Regular",
    backgroundColor: '#0000001a',
    borderWidth: 1,
    borderColor: '#0000001a'
  },
  itick:{
    width: 20,
    height: 20,
  },

  eliststyle: {
    padding: 4,
    borderColor: '#ced4da',
    borderWidth: 1,
    marginLeft: 5,
    marginBottom: 5,
    flexDirection: 'row',
    alignItems: 'center',
    height: 28,
    
  },

  lh18: {
    lineHeight: 18
  },
  lh20: {
    lineHeight: 20
  },

  activeliststyle: {
    backgroundColor: '#37941e',
  },

  styletooltip: {
    backgroundColor: '#727272',
  },
  tip_close: {
    width: 10,
    height: 10
  },

  autocompleteContainer: {
    flex: 1,
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0,
    zIndex: 1
  },
  itemText: {
    fontSize: 15,
    margin: 2
  },
  descriptionContainer: {
    // `backgroundColor` needs to be set otherwise the
    // autocomplete input will disappear on text input.
    backgroundColor: '#F5FCFF',
    marginTop: 25
  },
  infoText: {
    textAlign: 'center'
  },
  titleText: {
    fontSize: 18,
    fontWeight: '500',
    marginBottom: 10,
    marginTop: 10,
    textAlign: 'center'
  },
  directorText: {
    color: 'grey',
    fontSize: 12,
    marginBottom: 10,
    textAlign: 'center'
  },
  openingText: {
    textAlign: 'center'
  },

  tabview : {
    height: 500,
    flex: 1,
  },
  tabbuttonview: {
    backgroundColor: '#d01d15',
  },

  maintabview : {
    borderColor: '#d01d15',
    borderWidth: 1,
    marginBottom: 20,
    marginTop: 10,
  },

  tabbtn: {
    backgroundColor: '#eeeeee',
    paddingTop: 7,
    paddingBottom: 7,
    fontSize: 12,
    fontFamily: (Platform.OS === 'ios') ? "OpenSans-Light" : "OpenSans-Regular"
  },

  autocompleteContainer: {
    //height: 500
    flex: 1,
  },
  itemcontainer : {
   // flex: 1,
   left: 0,
     position: 'absolute',
     right: 0,
     top: 31,
     zIndex: 999,
    
  },
  itemText: {
    borderTopWidth: 1,
    borderTopColor: '#ced4da',
    padding:5
    // fontSize: 15
  },

  scrollView: {
    height: deviceHeight - 180
  },

  title_recorditem: {
    fontWeight: 'bold',
    fontSize: 14,
    paddingTop: 15,
    paddingBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#00000033',
    marginBottom: 10
  },
  subtitlestyle: {
    color: '#d01d15',
    fontWeight: 'bold',
    fontSize: 14,
    paddingBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#00000033',
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 15
  },

  customselect: {
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#ced4da',
    padding: 6
  },
  selectpickertxt : {
   
  },
  triangleshapecss: {
    width: 0,
    height: 0,
    borderLeftWidth: 5,
    borderRightWidth: 5,
    borderTopWidth: 6,
    borderStyle: 'solid',
    backgroundColor: 'transparent',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderTopColor: '#d01d15',
    marginLeft: 8
  },
  whitetriangle: {
    borderTopColor: '#ffffff',
  },
  optionbottom : {
    borderTopColor: '#0000001a',
    borderStyle: 'solid',
    borderTopWidth:1,
    padding: 10
  },
  selectradio: {
    backgroundColor: '#ced4da', 
    width: 14,
    height: 14,
    borderWidth: 4,
    borderStyle: 'solid',
    borderColor: '#ced4da',
    backgroundColor: '#ced4da',
    borderRadius : 15
  },
  selectradioactive: {
    borderColor: '#007bff',
    backgroundColor: '#ffffff'
  },

  close : {
    width: 20,
    height: 20
  },
};

