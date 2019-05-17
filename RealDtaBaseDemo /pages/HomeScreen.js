import React from 'react';
import { View, Text, TextInput, ScrollView, Image } from 'react-native';
import Mybutton from './components/Mybutton';
import s from '../App/Assets/Style/screen';
import m from '../App/Assets/Style/mycreen';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default class HomeScreen extends React.Component {
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
            <View style={[m.feeds]}>
              <View style={[s.row, s.pl10, s.mb15]}>
                <Image source={require('../App/Images/facebook.png')} style={m.proImg} />
                <View style={[s.pl10]}>
                  <View style={[s.mb3, s.flexdir, s.alignItems, s.justifyContent]}>
                    <Text style={[s.fs18, s.fsw, m.darkGrayColor]}>Facebook</Text>
                    <Icon name='chevron-down' type='FontAwesome5' color='#787878' style={[s.fs16]} />
                  </View>
                  <Text style={[m.grayColor, s.mb3]}>4,076,477 followers</Text>
                  <Text style={m.grayColor}>2d</Text>
                </View>
              </View>
              <Text style={[s.pl10, s.pr10, s.lh20, s.fs16, s.mb10]} numberOfLines={3}>"I recently joined the Oculus organization as 
              part of the store, where I support out teams on delivering scalable soultions."
              </Text>
              <Image source={require('../App/Images/fbDemo.jpg')} style={[m.attchimg, s.mb10]} resizeMode="contain" />
              <View style={[s.flexdir, s.justifyContent, s.pl10, s.pr10, s.mb10]}>
                <View style={[s.flexdir, s.alignItems]}>
                  <Icon name='thumbs-up' type='FontAwesome5' color='#787878' style={s.mr5} />
                  <Icon name='heart' type='FontAwesome5' color='#787878' style={s.mr5} />
                  <Text style={m.grayColor}>855</Text>
                </View>
                <Text style={m.grayColor}>14 comments</Text>
              </View>
              <View style={[s.pl10, s.pr10]}>
                <View style={[m.actions, s.flexdir]}>
                  <View style={[s.flexdir, s.alignItems]}>
                    <Icon name='thumbs-up' type='FontAwesome5' color='#787878' style={[s.fs18]} />
                    <Text style={[m.grayColor, s.pl10, s.fs16]}>Like</Text>
                  </View>
                  <View style={[s.flexdir, s.alignItems]}>
                    <Icon name='comment-alt' type='FontAwesome5' color='#787878' style={[s.fs18]} />
                    <Text style={[m.grayColor, s.pl10, s.fs16]}>Comment</Text>
                  </View>
                  <View style={[s.flexdir, s.alignItems]}>
                    <Icon name='share-alt' type='FontAwesome5' color='#787878' style={[s.fs18]} />
                    <Text style={[m.grayColor, s.pl10, s.fs16]}>Share</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={[m.feeds]}>
              <View style={[s.row, s.pl10, s.mb15]}>
                <Image source={require('../App/Images/intellogo.png')} style={m.proImg} />
                <View style={[s.pl10]}>
                  <View style={[s.mb3, s.flexdir, s.alignItems, s.justifyContent]}>
                    <Text style={[s.fs18, s.fsw, m.darkGrayColor]}>Intel Corporation</Text>
                    <Icon name='chevron-down' type='FontAwesome5' color='#787878' style={[s.fs16]} />
                  </View>
                  <Text style={[m.grayColor, s.mb3]}>1,332,143 followers</Text>
                  <Text style={m.grayColor}>1d</Text>
                </View>
              </View>
              <Text style={[s.pl10, s.pr10, s.lh20, s.fs16, s.mb10]} numberOfLines={3}>After Hurricane Maria devastated Puerto Rico,
               a supersized Intel Employee Services Corps team delivered technology solutions to 30 school impacting over 15,000 students.
              </Text>
              <Image source={require('../App/Images/intel.jpg')} style={[m.attchimg, s.mb10]} resizeMode="contain" />
              <View style={[s.flexdir, s.justifyContent, s.pl10, s.pr10, s.mb10]}>
                <View style={[s.flexdir, s.alignItems]}>
                  <Icon name='thumbs-up' type='FontAwesome5' color='#787878' style={s.mr5} />
                  <Icon name='heart' type='FontAwesome5' color='#787878' style={s.mr5} />
                  <Text style={m.grayColor}>175</Text>
                </View>
                <Text style={m.grayColor}>7 comments</Text>
              </View>
              <View style={[s.pl10, s.pr10]}>
                <View style={[m.actions, s.flexdir]}>
                  <View style={[s.flexdir, s.alignItems]}>
                    <Icon name='thumbs-up' type='FontAwesome5' color='#787878' style={[s.fs18]} />
                    <Text style={[m.grayColor, s.pl10, s.fs16]}>Like</Text>
                  </View>
                  <View style={[s.flexdir, s.alignItems]}>
                    <Icon name='comment-alt' type='FontAwesome5' color='#787878' style={[s.fs18]} />
                    <Text style={[m.grayColor, s.pl10, s.fs16]}>Comment</Text>
                  </View>
                  <View style={[s.flexdir, s.alignItems]}>
                    <Icon name='share-alt' type='FontAwesome5' color='#787878' style={[s.fs18]} />
                    <Text style={[m.grayColor, s.pl10, s.fs16]}>Share</Text>
                  </View>
                </View>
              </View>
            </View>

          </View>
        </ScrollView>

        <View style={[s.rowdir, m.footer]}>
          <Icon name='home' type='FontAwesome5' color='#787878' style={m.footerIcon} />
          <Icon name='user-friends' type='FontAwesome5' color='#787878' style={m.footerIcon} onPress={() => this.props.navigation.navigate('Users')} />
          <Icon name='plus-circle' type='FontAwesome5' color='#787878' style={m.footerIcon} />
          <Icon name='bell' type='FontAwesome5' color='#787878' style={m.footerIcon} />
          <Icon name='suitcase' type='FontAwesome5' color='#787878' style={m.footerIcon} />
        </View>
      </View>
    );
  }
}