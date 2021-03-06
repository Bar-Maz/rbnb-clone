import React, {Component} from 'react';
import {Text, Image, Dimensions, View, StatusBar, Platform, SafeAreaView, TextInput, ScrollView} from 'react-native';
import {createStackNavigator} from 'react-navigation';
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Category from "../components/Explore/Category";

const {height, width} = Dimensions.get('window');

class ExploreScreen extends Component {
  componentWillMount(): void {
    this.startHeaderHeight = 80;
    if (Platform.OS === 'android') {
      this.startHeaderHeight = 100 + StatusBar.currentHeight;
    }
  }

  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <View style={{flex: 1}}>
          <View style={{
            height: this.startHeaderHeight,
            backgroundColor: 'white',
            borderBottomColor: '#ddd',
            borderBottomWidth: 1
          }}>
            <View style={{
              flexDirection: 'row',
              backgroundColor: 'white',
              marginHorizontal: 20,
              paddingHorizontal: 10,
              shadowOffset: {width: 0, height: 0},
              shadowColor: 'grey',
              shadowOpacity: '0.4',
              elevation: 1,
              alignItems: 'center',
              marginTop: Platform.OS === 'android' ? 30 : null,
            }}>
              <FontAwesome5 name={'search'} size={20}
                            style={{marginRight: 10}}/>
              <TextInput placeholder="Try Rzeszów"
                         placeholderTextColor="grey"
                         UnderlineColorAndroid="transparent"
                         style={{
                           flex: 1,
                           fontWeight: '700',
                           backgroundColor: 'white',
                         }}/>
            </View>
          </View>
          <ScrollView
            contentContainerStyle={{
              paddingBottom: 20
            }}
            scrollEventThrottle={16}>
            <View style={{
              flex: 1, backgroundColor: 'white',
              paddingTop: 20
            }}>
              <Text style={{
                fontSize: 24, fontWeight: '700',
                paddingHorizontal: 20, color: 'black'
              }}>
                What can we help you find?
              </Text>
              <View style={{height: 140, marginTop: 15}}>
                <ScrollView
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                  contentContainerStyle={{
                    paddingRight: 20
                  }}
                >
                  <Category image={require('../assets/home.jpg')} title={'Home'}/>
                  <Category image={require('../assets/bike.jpg')} title={'Experiences'}/>
                  <Category image={require('../assets/restaurant.jpg')} title={'Restaurant'} style={{marginEnd: 20}}/>
                </ScrollView>
              </View>
              <View style={{marginTop: 40,}}>
                <Text style={{
                  fontSize: 24, fontWeight: '700',
                  paddingHorizontal: 20, color: 'black'
                }}>
                  Introducing Airbnb Plus
                </Text>
                <Text style={{
                  marginTop: 10, fontWeight: '100',
                  paddingHorizontal: 20
                }}>
                  A brief, nicely written description of
                  Airbnb plus that should be here.
                </Text>
                <View style={{
                  width: width - 40,
                  height: 240,
                  marginTop: 20,
                  alignSelf: 'center'
                }}>
                  <Image source={require('../assets/home2.jpg')}
                  style={{
                    flex:1, height: null, width: null, resizeMode: 'cover',
                    borderRadius: 5, borderWidth: 1, borderColor: '#ddd'
                  }}/>
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  }
}

ExploreScreen = createStackNavigator({
    main: ExploreScreen
  },
  {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
      tabBarLabel: 'EXPLORE',
      tabBarIcon: ({tintColor}) => (
        <FontAwesome5 name="search"
                      color={tintColor}
                      size={24}
                      solid/>
      ),
    }
  });
export default ExploreScreen;