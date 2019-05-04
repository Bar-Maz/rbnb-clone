import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {createStackNavigator} from "react-navigation";

class ProfileScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>ProfileScreen</Text>
      </View>
    );
  }
}

export default ProfileScreen = createStackNavigator({
    main: ProfileScreen
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