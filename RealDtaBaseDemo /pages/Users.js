import React from 'react';
import { View, Text, TextInput, ScrollView, Image } from 'react-native';
import Mybutton from './components/Mybutton';
import s from '../App/Assets/Style/screen';
import m from '../App/Assets/Style/mycreen';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default class Users extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={[s.flex1, s.pb40]}>
        <View style={[s.pl10, s.pr10, s.pt15, s.pb15, m.srchBox, s.rowdir]}>
          {/* <Icon name='search' type='FontAwesome5' style={m.srchIcon} /> */}
          <TextInput placeholder='Serach' style={m.inputStyle} ></TextInput>
          <TouchableOpacity style={[m.srchBtn]}><Text style={[s.fs16, m.srchBtnTxt]}>Go</Text></TouchableOpacity>
        </View>
        <ScrollView>
          <View style={[s.flex1, s.pt15]}>
            <View style={[s.row, s.pl10, s.pr10, s.mb10]}>
              <View style={[s.col]}>
                <View style={[s.mr5, m.userProfile]}>
                  <View style={[m.ImageStyle, s.row, s.justifyContentCenter]}>
                    <Image source={require('../App/Images/userImage.png')} style={m.userImage} />
                  </View>
                  <Text style={[m.username, s.mt10, s.mb10]}>Nitin Kumar</Text>
                  <Text style={m.prfsn} numberOfLines={2}>Android Developer</Text>
                  <View style={[s.rowdir, s.mb15]}>
                    <Image source={require('../App/Images/userImage.png')} style={m.mutualImage} />
                    <Text style={[m.mutualTxt, s.flex1, s.flexwrap]} numberOfLines={2}>25 mutual connections</Text>
                  </View>
                  <TouchableOpacity style={m.connectBtn}><Text style={m.connectBtnTxt}>CONNECT</Text></TouchableOpacity>
                </View>
              </View>
              <View style={[s.col]}>
                <View style={[s.ml5, m.userProfile]}>
                  <View style={[m.ImageStyle, s.row, s.justifyContentCenter]}>
                    <Image source={require('../App/Images/userImage.png')} style={m.userImage} />
                  </View>
                  <Text style={[m.username, s.mt10, s.mb10]}>Rohit Tomar</Text>
                  <Text style={m.prfsn} numberOfLines={2}>Backend Developer</Text>
                  <View style={[s.rowdir, s.mb15]}>
                    <Image source={require('../App/Images/userImage.png')} style={m.mutualImage} />
                    <Text style={[m.mutualTxt, s.flex1, s.flexwrap]} numberOfLines={2}>12 mutual connection</Text>
                  </View>
                  <TouchableOpacity style={m.connectBtn}><Text style={m.connectBtnTxt}>CONNECT</Text></TouchableOpacity>
                </View>
              </View>
            </View>
            <View style={[s.row, s.pl10, s.pr10, s.mb10]}>
              <View style={[s.col]}>
                <View style={[s.mr5, m.userProfile]}>
                  <View style={[m.ImageStyle, s.row, s.justifyContentCenter]}>
                    <Image source={require('../App/Images/userImage.png')} style={m.userImage} />
                  </View>
                  <Text style={[m.username, s.mt10, s.mb10]}>Chandra Sekhar</Text>
                  <Text style={m.prfsn} numberOfLines={2}>Senior PHP Developer at Transnational</Text>
                  <View style={[s.rowdir, s.mb15]}>
                    <Image source={require('../App/Images/userImage.png')} style={m.mutualImage} />
                    <Text style={[m.mutualTxt, s.flex1, s.flexwrap]} numberOfLines={2}>1 mutual connection</Text>
                  </View>
                  <TouchableOpacity style={m.connectBtn}><Text style={m.connectBtnTxt}>CONNECT</Text></TouchableOpacity>
                </View>
              </View>
              <View style={[s.col]}>
                <View style={[s.ml5, m.userProfile]}>
                  <View style={[m.ImageStyle, s.row, s.justifyContentCenter]}>
                    <Image source={require('../App/Images/userImage.png')} style={m.userImage} />
                  </View>
                  <Text style={[m.username, s.mt10, s.mb10]}>Anuj Tomar</Text>
                  <Text style={m.prfsn} numberOfLines={2}>UI Developer</Text>
                  <View style={[s.rowdir, s.mb15]}>
                    <Image source={require('../App/Images/userImage.png')} style={m.mutualImage} />
                    <Text style={[m.mutualTxt, s.flex1, s.flexwrap]} numberOfLines={2}>17 mutual connection</Text>
                  </View>
                  <TouchableOpacity style={m.connectBtn}><Text style={m.connectBtnTxt}>CONNECT</Text></TouchableOpacity>
                </View>
              </View>
            </View>
            <View style={[s.row, s.pl10, s.pr10, s.mb10]}>
              <View style={[s.col]}>
                <View style={[s.mr5, m.userProfile]}>
                  <View style={[m.ImageStyle, s.row, s.justifyContentCenter]}>
                    <Image source={require('../App/Images/userImage.png')} style={m.userImage} />
                  </View>
                  <Text style={[m.username, s.mt10, s.mb10]}>Nitin Kumar</Text>
                  <Text style={m.prfsn} numberOfLines={2}>Android Developer</Text>
                  <View style={[s.rowdir, s.mb15]}>
                    <Image source={require('../App/Images/userImage.png')} style={m.mutualImage} />
                    <Text style={[m.mutualTxt, s.flex1, s.flexwrap]} numberOfLines={2}>25 mutual connections</Text>
                  </View>
                  <TouchableOpacity style={m.connectBtn}><Text style={m.connectBtnTxt}>CONNECT</Text></TouchableOpacity>
                </View>
              </View>
              <View style={[s.col]}>
                <View style={[s.ml5, m.userProfile]}>
                  <View style={[m.ImageStyle, s.row, s.justifyContentCenter]}>
                    <Image source={require('../App/Images/userImage.png')} style={m.userImage} />
                  </View>
                  <Text style={[m.username, s.mt10, s.mb10]}>Rohit Tomar</Text>
                  <Text style={m.prfsn} numberOfLines={2}>Backend Developer</Text>
                  <View style={[s.rowdir, s.mb15]}>
                    <Image source={require('../App/Images/userImage.png')} style={m.mutualImage} />
                    <Text style={[m.mutualTxt, s.flex1, s.flexwrap]} numberOfLines={2}>12 mutual connection</Text>
                  </View>
                  <TouchableOpacity style={m.connectBtn}><Text style={m.connectBtnTxt}>CONNECT</Text></TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>

        <View style={[s.rowdir, m.footer]}>
          <Icon name='home' type='FontAwesome5' color='#787878' style={m.footerIcon} style={m.footerIcon} onPress={() => this.props.navigation.navigate('HomeScreen')} />
          <Icon name='user-friends' type='FontAwesome5' color='#787878' style={m.footerIcon} />
          <Icon name='plus-circle' type='FontAwesome5' color='#787878' style={m.footerIcon} />
          <Icon name='bell' type='FontAwesome5' color='#787878' style={m.footerIcon} />
        </View>
      </View>
    );
  }
}