import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {createStackNavigator} from "react-navigation";

class InboxScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>InboxScreen</Text>
      </View>
    );
  }
}

export default InboxScreen = createStackNavigator({
    main: InboxScreen
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