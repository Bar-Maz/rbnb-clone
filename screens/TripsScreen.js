import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {createStackNavigator} from "react-navigation";

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
    }
  });
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});