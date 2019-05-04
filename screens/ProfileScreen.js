import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {createStackNavigator} from "react-navigation";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

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
      tabBarLabel: 'PROFILE',
      tabBarIcon: ({ tintColor }) => (
        <FontAwesome5 name = "user"
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