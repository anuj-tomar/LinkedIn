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

  rowrow: {
    flexDirection: 'row'
  },

  col: {
    flexGrow: 1,
    flexBasis: 0,
  },
  
  alignItems: {
    alignItems: 'center',
  },

  alignItemsTop: {
    alignItems: 'flex-start',
  },
  alignItemsBottom: {
    alignItems: 'flex-end',
  },
  alignSelf:{
    alignSelf: 'flex-start'
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
  w50 : {
    width : 50
  },
  w85 : {
    width : 85
  },
  w100 : {
    width : 100
  },
  w120 : {
    width : 120
  },
  
  c2 : {
    width: '48%',
    margin: '1%',
  },

  displayinlineBlock : {
    flexWrap: 'wrap', 
    alignItems: 'flex-start',
    flexDirection:'row',
  },
  
};
