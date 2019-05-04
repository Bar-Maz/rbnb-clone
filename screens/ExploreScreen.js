import React, { Component } from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {createStackNavigator} from 'react-navigation';
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

class ExploreScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>ExploreScreen</Text>
            </View>
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
          tabBarIcon: ({ tintColor }) => (
            <FontAwesome5 name = "search"
                  color = {tintColor}
                  size = {24}
                  solid/>
          ),
      }
  });
export default ExploreScreen;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});