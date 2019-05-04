import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {createStackNavigator} from "react-navigation";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
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
      tabBarLabel: 'SAVED',
      tabBarIcon: ({ tintColor }) => (
        <FontAwesome5 name = "heart"
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