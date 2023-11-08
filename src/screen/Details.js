import React, {useState} from 'react';
import {View, TouchableOpacity, Image, Text, Linking} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {SharedElement} from 'react-navigation-shared-element';
import FastImage from 'react-native-fast-image';
const Details = ({navigation}) => {
  const [id, setId] = useState(1);
  const [companies, setCompanies] = useState([
    {
      company_name: 'Camp Coding',
      Adress: 'Egypt, Tanta, 20st othman',
      phoneNumber: '+201555449098',
      company_image:
        'https://images.unsplash.com/photo-1581456495146-65a71b2c8e52?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHx8&w=1000&q=80',
      facebook_url: 'https://www.facebook.com/campcoding',
      whatsapp_number: '+201555449098',
      key: 1,
      company_description:
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text',
    },
    {
      company_name: 'Camp Coding',
      Adress: 'Egypt, Tanta, 20st othman',
      phoneNumber: '+201555449098',
      company_image:
        'https://images.unsplash.com/photo-1581456495146-65a71b2c8e52?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHx8&w=1000&q=80',
      facebook_url: 'https://www.facebook.com/campcoding',
      whatsapp_number: '+201555449098',
      key: 2,
    },
    {
      company_name: 'Camp Coding',
      Adress: 'Egypt, Tanta, 20st othman',
      phoneNumber: '+201555449098',
      company_image:
        'https://images.unsplash.com/photo-1581456495146-65a71b2c8e52?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHx8&w=1000&q=80',
      facebook_url: 'https://www.facebook.com/campcoding',
      whatsapp_number: '+201555449098',
      key: 3,
    },
    {
      company_name: 'Camp Coding',
      Adress: 'Egypt, Tanta, 20st othman',
      phoneNumber: '+201555449098',
      company_image:
        'https://images.unsplash.com/photo-1581456495146-65a71b2c8e52?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHx8&w=1000&q=80',
      facebook_url: 'https://www.facebook.com/campcoding',
      whatsapp_number: '+201555449098',
      key: 4,
    },
    {
      company_name: 'Camp Coding',
      Adress: 'Egypt, Tanta, 20st othman',
      phoneNumber: '+201555449098',
      company_image:
        'https://images.unsplash.com/photo-1581456495146-65a71b2c8e52?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHx8&w=1000&q=80',
      facebook_url: 'https://www.facebook.com/campcoding',
      whatsapp_number: '+201555449098',
      key: 5,
    },
  ]);

  function renderBody() {
    return (
      <FlatList
        data={companies}
        showsVerticalScrollIndicator={false}
        renderItem={({item, index}) => {
          return (
            <View
              style={{
                width: '95%',
                // backgroundColor: '#4E8397',
                alignSelf: 'center',
                marginTop: 30,
                // padding: 10,
                borderRadius: 20,
                paddingTop: 10,
                borderWidth: 4,
                // borderColor: '#002B5B',
                borderColor: '#748E63',
              }}>
              <Text
                style={{
                  fontSize: 17,
                  fontWeight: 'bold',
                  color: '#54E346',
                  // color: '#D2DE32',
                  alignSelf: 'center',
                  fontWeight: 'bold',
                }}>
                {item.company_name}
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  width: '100%',
                  // borderWidth: 2,
                  // borderColor: '#f0f',
                  borderRadius: 20,
                  alignItems: 'center',
                  marginTop: 15,
                }}>
                <View
                  style={{
                    // borderWidth: 2,
                    borderColor: '#0ff',
                    marginLeft: 8,
                  }}>
                  {/* whatsapp.png */}
                  <View
                    style={{
                      flexDirection: 'row',
                      // borderWidth: 2,
                      borderColor: '#ff0',
                      marginBottom: 10,
                    }}>
                    <FastImage
                      source={require('../images/location.png')}
                      style={{
                        width: 30,
                        height: 30,
                        marginRight: 10,
                      }}
                    />
                    <Text
                      style={{
                        color: '#000',
                      }}>
                      {item.Adress}
                    </Text>
                  </View>

                  <View
                    style={{
                      flexDirection: 'row',
                      // borderWidth: 2,
                      borderColor: '#ff0',
                      marginBottom: 10,
                    }}>
                    <FastImage
                      source={require('../images/whatsapp.png')}
                      style={{
                        width: 30,
                        height: 30,
                        marginRight: 10,
                      }}
                    />
                    <Text
                      style={{
                        color: '#000',
                      }}>
                      {item.whatsapp_number}
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      // borderWidth: 2,
                      borderColor: '#ff0',
                      marginBottom: 10,
                    }}>
                    <FastImage
                      source={require('../images/information.png')}
                      style={{
                        width: 30,
                        height: 30,
                        marginRight: 10,
                      }}
                    />
                    <TouchableOpacity
                      onPress={() => {
                        navigation.navigate('AboutCompany', {
                          psItem: item,
                        });
                      }}>
                      <Text
                        style={{
                          color: '#000',
                          textDecorationLine: 'underline',
                        }}>
                        About us{' '}
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>

                <TouchableOpacity>
                  <SharedElement id={`item.${item?.company_image}.img`}>
                    <FastImage
                      source={{
                        uri: item.company_image,
                      }}
                      style={{
                        width: 80,
                        height: 80,
                        borderRadius: 20,
                        // borderRadius: 40,
                      }}
                    />
                  </SharedElement>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  width: '100%',
                  height: 70,
                  borderWidth: 2,
                  borderBottomLeftRadius: 20,
                  borderBottomRightRadius: 20,
                  borderColor: '#002B5B',
                  flexDirection: 'row',
                  marginTop: 10,
                  borderBottomWidth: 0,
                  borderRightWidth: 0,
                  borderLeftWidth: 0,
                }}>
                <TouchableOpacity
                  onPress={() => Linking.openURL(item.facebook_url)}
                  style={{
                    width: '50%',
                    height: 70,
                    borderWidth: 2,
                    borderColor: '#4E8397',
                    flexDirection: 'row',
                    alignItems: 'center',
                    padding: 5,
                    justifyContent: 'center',
                    borderTopWidth: 0,
                    borderLeftWidth: 0,
                    borderBottomWidth: 0,
                    // borderRightWidth: 0,
                  }}>
                  <FastImage
                    source={require('../images/facebook.png')}
                    style={{
                      width: 30,
                      height: 30,
                      borderRadius: 20,
                      // borderRadius: 40,
                    }}
                  />
                  <Text
                    style={{
                      fontSize: 12,
                      fontWeight: 'bold',
                      color: '#000',
                      alignSelf: 'center',
                    }}>
                    Our Profile
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => Linking.openURL(`tel:${item.phoneNumber}`)}
                  style={{
                    width: '50%',
                    height: 70,
                    // borderWidth: 2,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: 5,
                    borderColor: '#0ff',
                    // borderTopWidth: 0,
                    // borderRightWidth: 0,

                    // borderRightWidth: 0,
                  }}>
                  <FastImage
                    source={require('../images/call.png')}
                    style={{
                      width: 30,
                      height: 30,
                      borderRadius: 20,
                      // borderRadius: 40,
                    }}
                  />
                  <Text
                    style={{
                      fontSize: 12,
                      fontWeight: 'bold',
                      color: '#000',
                      alignSelf: 'center',
                    }}>
                    Call Us
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          );
        }}
      />
    );
  }
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#fff',
      }}>
      {renderBody()}
    </View>
  );
};

export default Details;
