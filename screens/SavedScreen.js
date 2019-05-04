import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {createStackNavigator} from "react-navigation";

class SavedScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>SavedScreen</Text>
      </View>
    );
  }
}

export default SavedScreen = createStackNavigator({
    main: SavedScreen
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