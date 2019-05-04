import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {createStackNavigator} from "react-navigation";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

class TripsScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>TripsScreen</Text>
      </View>
    );
  }
}

export default TripsScreen = createStackNavigator({
    main: TripsScreen
  },
  {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
      tabBarLabel: 'TRIPS',
      tabBarIcon: ({ tintColor }) => (
        <FontAwesome5 name = "route"
              color = {tintColor}
              size = {24}
              solid/>
      ),
    }
  });
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});