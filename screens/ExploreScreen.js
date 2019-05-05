import React, {Component} from 'react';
import {Text, View, StatusBar, Platform, SafeAreaView, TextInput, ScrollView} from 'react-native';
import {createStackNavigator} from 'react-navigation';
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Category from "../components/Explore/Category";

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
            scrollEventThrottle={16}>
            <View style={{
              flex: 1, backgroundColor: 'white',
              paddingTop: 20
            }}>
              <Text style={{
                fontSize: 24, fontWeight: '700',
                paddingHorizontal: 20
              }}>
                What can we help you find?
              </Text>
              <View style={{height: 140, marginTop: 15,}}>
                <ScrollView
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}>
                  <Category image={require('../assets/home.jpg')} title={'Home'}/>
                  <Category image={require('../assets/bike.jpg')} title={'Experiences'}/>
                  <Category image={require('../assets/restaurant.jpg')} title={'Restaurant'}/>
                </ScrollView>
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