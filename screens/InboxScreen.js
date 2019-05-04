import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {createStackNavigator} from "react-navigation";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

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
      tabBarLabel: 'INBOX',
      tabBarIcon: ({ tintColor }) => (
        <FontAwesome5 name = "envelope"
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