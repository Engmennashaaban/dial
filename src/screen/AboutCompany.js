import React from 'react';
import {View, Text, ScrollView, TouchableOpacity, Linking} from 'react-native';
import {SharedElement} from 'react-navigation-shared-element';
import FastImage from 'react-native-fast-image';
import {RFValue} from 'react-native-responsive-fontsize';
const AboutCompany = ({navigation, route}) => {
  const {psItem} = route.params;
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#ffff',
      }}>
      <SharedElement id={`item.${psItem?.company_image}.img`}>
        <FastImage
          source={{
            uri: psItem.company_image,
          }}
          resizeMode="cover"
          style={{
            width: '100%',
            height: RFValue(300),
            alignSelf: 'center',
            borderBottomLeftRadius: 100,
          }}
        />
      </SharedElement>
      <View
        style={{
          flex: 1,
          paddingHorizontal: 10,
        }}>
        <ScrollView>
          <Text
            style={{
              //               color: '#86A3B8',
              color: '#54E346',
              fontSize: 20,
              alignSelf: 'center',
              fontWeight: '700',
              marginTop: 20,
            }}>
            About {psItem.company_name}
          </Text>
          <View
            style={{
              width: '95%',
              borderWidth: 2,
              //               borderColor: '#4E8397',
              borderRadius: 20,
              alignSelf: 'center',
              marginVertical: 14,
              borderColor: '#748E63',
            }}>
            <Text
              style={{
                color: '#000',
                fontSize: 12,
                textAlign: 'center',
                marginTop: 10,
                lineHeight: 15,
              }}>
              {psItem.company_description}
            </Text>
          </View>

          <View
            style={{
              width: '95%',
              height: 50,
              borderWidth: 2,
              //               borderColor: '#4E8397',
              borderColor: '#748E63',

              borderRadius: 20,
              alignSelf: 'center',
              padding: 10,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <FastImage
              source={require('../images/call.png')}
              style={{
                width: 30,
                height: 30,
                borderRadius: 20,
                marginRight: 18,
                // borderRadius: 40,
              }}
            />
            <Text
              style={{
                color: '#000',
                alignSelf: 'center',
                fontSize: 15,
                fontWeight: 'bold',
                marginLeft: 35,
              }}>
              {psItem.whatsapp_number}
            </Text>
          </View>
          <View
            style={{
              width: '95%',
              height: 50,
              borderWidth: 2,
              //               borderColor: '#4E8397',
              borderColor: '#748E63',

              borderRadius: 20,
              alignSelf: 'center',
              padding: 10,
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 15,
            }}>
            <FastImage
              source={require('../images/send.png')}
              style={{
                width: 30,
                height: 30,
                borderRadius: 20,
                marginRight: 18,
                // borderRadius: 40,
              }}
            />
            <Text
              style={{
                color: '#000',
                alignSelf: 'center',
                fontSize: 15,
                fontWeight: 'bold',
                marginLeft: 35,
              }}>
              Get Direction
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => Linking.openURL(psItem.facebook_url)}
            style={{
              width: '95%',
              height: 50,
              borderWidth: 2,
              //               borderColor: '#4E8397',
              borderColor: '#748E63',

              borderRadius: 20,
              alignSelf: 'center',
              padding: 10,
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 15,
            }}>
            <FastImage
              source={require('../images/facebook.png')}
              style={{
                width: 30,
                height: 30,
                borderRadius: 20,
                marginRight: 18,
                // borderRadius: 40,
              }}
            />
            <Text
              style={{
                color: '#000',
                alignSelf: 'center',
                fontSize: 15,
                fontWeight: 'bold',
                marginLeft: 35,
              }}>
              Our Profile
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  );
};
AboutCompany.sharedElements = route => {
  const {psItem} = route.params;
  return [
    {
      id: `item.${psItem?.company_image}.img`,
      animation: 'fade-in',
      resize: 'clip',
    },
  ];
};
export default AboutCompany;
